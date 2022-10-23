import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_wypw6gn",
        "template_nw23j2g",
        formRef.current,
        "CIOb2v3smx0gQi28R"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
  };
  return (
    <div>
      <div className="spacer layer2"></div>
      <div className="section"></div>

      <div className="contact-section">
        <div className="form-section">
          <h1 className="text-center" id="contact">
            Contact
          </h1>
          <form ref={formRef} onSubmit={sendEmail}>
            <input
              className="input"
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
              required
            />

            <input
              className="input"
              type="email"
              name="user_email"
              placeholder="Enter Your E-Mail"
              required
            />
            <textarea
              className="input"
              name="message"
              placeholder="Enter Your Message"
              required
            />
            <input className="submit-btn" type="submit" value="Send" />
          </form>
          <div className="links">
            <a href="https://github.com/imtemp">
              <p>GitHub</p>
            </a>
            <a
              href="https://www.linkedin.com/in/linyushu
"
            >
              <p>LinkedIn</p>
            </a>
            <a href="https://discordapp.com/users/105776687458865152">
              <p>Discord</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
