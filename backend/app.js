const express = require("express");
const app = express();
const port = 3000;
const client = require('./db/conn.js');
app.use(express.json());

//! multer
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}.${file.originalname}`); //! current date + file name
  },
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.json({ message: "Hello Node! " });
});

//! work
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

//! workers
app.get("/workers", async (req, res) => {
  const result = await client.query("SELECT * FROM workers");
  res.json({ data: result.rows[0] });
});

app.post("/workers", async (req, res) => {
  const result = await client.query(
    "INSERT INTO workers (name,surname,phone_number,mail,employer_id,work_id,wage,image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
    [
      req.body.name,
      req.body.surname,
      req.body.phone_number,
      req.body.mail,
      req.body.employer_id,
      req.body.work_id,
      req.body.wage,
      req.body.image,
    ]
  );
  res.json({ message: "Added new work", desc: result.rowCount });
});

app.post("/workerimage", upload.single("file"), function (req, res, next) {
  res.json(req.file);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
