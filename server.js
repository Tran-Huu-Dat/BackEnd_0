const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

//config static files
app.use(express.static(path.join(__dirname, "src/public")));

//Khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!Tôi là Trần Hữu Đạt");
});

app.get("/abc", (req, res) => {
  res.render("sample");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
