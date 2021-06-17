var express = require("express");
var app = express();

const port = process.env.PORT || 4000;
const host = "localhost";

app.get("/", function (req, res) {
  res.status(200).json({ message: "Hello World" });
});

app.listen(4000, () => {
  console.log(`Server is Up and Running on Port : ${port}`);
  console.log(`Developement Server Started at http://${host}:${port}/`);
});
