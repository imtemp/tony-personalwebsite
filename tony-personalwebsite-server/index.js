const Express = require("express");
const path = require("path");
const app = Express();

app.listen("3000", () => {
  console.log("Listening on port 3000...");
});

//serve
const publicpath = path.join();
