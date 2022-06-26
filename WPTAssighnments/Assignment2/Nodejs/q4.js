const express = require("express");
const app = express();

app.use(express.static("cp"));

app.get("/addItem", (req, res) => {
  res.send("add item needs to be done.");
});

app.get("/updateItem", (req, res) => {
  res.send("update item needs to be done.");
});

app.listen(900, function () {
  console.log("Listening to server 900");
});
