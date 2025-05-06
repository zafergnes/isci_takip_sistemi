const express = require("express");
const app = express();
const port = 3000;
const client = require('./db/conn.js');
app.get("/", (req, res) => {
  res.json({"message":'Hello World! 1213'});
});

app.post("/", (req, res) => {
  res.send("Got a POST request");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
