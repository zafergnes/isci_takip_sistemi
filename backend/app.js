const express = require("express");
const app = express();
const port = 3000;
const client = require('./db/conn.js');
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World! " });
});

app.post("/works", async (req, res) => {
  const result = await client.query(
    "INSERT INTO works (employer_id,work_name,work_desc,address) VALUES ($1,$2,$3,$4)",
    [
      req.body.employer_id,
      req.body.work_name,
      req.body.work_desc,
      req.body.address,
    ]
  );
  res.json({ message: "Added new work", desc: result.rowCount });
});

app.get("/works", async (req, res) => {
  const result = await client.query("SELECT * FROM works");
  res.json({ data: result.rows[0] });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
