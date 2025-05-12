const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const client = require("./db/conn.js");
app.use(express.json());
app.use(cors());
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

/*  kullanıcıları getir */
app.get("/employers", async (req, res) => {
  const result = await client.query("SELECT * FROM employers");
  res.json({ data: result.rows });
});

/*  kullanıcı ekle */
app.post("/add-employer", async (req, res) => {
  const result = await client.query(
    "INSERT INTO employers (name,surname,phone_number,mail,password) VALUES ($1,$2,$3,$4,$5)",
    [
      req.body.name,
      req.body.surname,
      req.body.phone_number,
      req.body.mail,
      req.body.password,
    ]
  );
  res.json({ message: "Added new work", desc: result.rowCount });
});

/*! iş ekle !*/
app.post("/works", async (req, res) => {
  const result = await client.query(
    "INSERT INTO works (employer_id,work_name,work_desc,address,cost_of_work) VALUES ($1,$2,$3,$4,$5)",
    [
      req.body.employer_id,
      req.body.work_name,
      req.body.work_desc,
      req.body.address,
      req.body.cost_of_work,
    ]
  );
  res.json({ message: "Added new work", desc: result.rowCount });
});

/*! işleri getir !*/
app.get("/works", async (req, res) => {
  const result = await client.query("SELECT *,TO_CHAR(work_start_date, 'DD-MM-YYYY') AS date FROM works");
  res.json({ data: result.rows });
});

/* id'sine göre işi getir */
app.get("/workbyid/:id", async (req, res) => {
  const result = await client.query(
    `SELECT *,TO_CHAR(work_start_date, 'DD - MM - YYYY') AS date FROM works WHERE id = ${req.params.id}`
  );
  res.json({ data: result.rows });
});

/*! çalışan ekle !*/
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

/*! çalışanları getir !*/
app.get("/workers", async (req, res) => {
  const result = await client.query("SELECT * FROM workers");
  res.json({ data: result.rows });
});

/* id'sine göre çalışanı getir */
app.get("/worker/:id", async (req, res) => {
  const result = await client.query(
    `SELECT *,work_name,TO_CHAR(work_start_date, 'DD - MM - YYYY') AS date FROM workers  INNER JOIN works ON workers.work_id = works.id WHERE workers.id = ${req.params.id};`
  );
  res.json({ data: result.rows });
});
/* iş id'sine göre çalışanı getir */
app.get("/workerbyworkid/:id", async (req, res) => {
  const result = await client.query(
    `SELECT *,TO_CHAR(registration_date, 'DD-MM-YYYY') AS date FROM workers WHERE work_id = ${req.params.id}`
  );
  res.json({ data: result.rows });
});

/*! çalışan fotoğrafı ekle !*/
app.post("/workerimage", upload.single("file"), function (req, res, next) {
  res.json(req.file);
});

/*! çalışan ödemelerini getir !*/
app.get("/worker-payments", async (req, res) => {
  const result = await client.query("SELECT * FROM worker_payments");
  res.json({ data: result.rows });
});

/*! çalışan ödemesi ekle !*/
app.post("/worker-payment", async (req, res) => {
  const result = await client.query(
    "INSERT INTO worker_payments (worker_id,amount_paid,employer_id) VALUES ($1,$2,$3)",
    [req.body.worker_id, req.body.amount_paid, req.body.employer_id]
  );
  res.json({ message: "Added new work", desc: result.rowCount });
});

/*! işin ödemelerini getir !*/
app.get("/workpayments/:id", async (req, res) => {
  const result = await client.query(`SELECT *,TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date FROM work_payments WHERE work_id = ${req.params.id}`);
  res.json({ data: result.rows });
});

/*! işin ödemelerinin toplamını getir !*/
app.get("/sumworkpayments/:id", async (req, res) => {
  const result = await client.query(`SELECT sum(amount_received) as sumamount FROM work_payments WHERE work_id = ${req.params.id}`);
  res.json({ data: result.rows });
});

/*! iş ödemesi ekle !*/
app.post("/work-payment", async (req, res) => {
  const result = await client.query(
    "INSERT INTO work_payments (work_id,amount_received,employer_id) VALUES ($1,$2,$3)",
    [req.body.work_id, req.body.amount_received, req.body.employer_id]
  );
  res.json({ message: "Added new work", desc: result.rowCount });
});

/* günlük yevmiye kontrolü ekle*/
app.get("/worker-controls", async (req, res) => {
  const result = await client.query("SELECT * FROM work_control");
  res.json({ data: result.rows });
});

/* çalışan çalıştığı günleri getir*/
app.get("/workeddays/:id", async (req, res) => {
  // ? pg kütüphanesi veri tipi date olsa bile sonuna time ekliyor çözümü to_char()  :|
  const result = await client.query(
    `SELECT TO_CHAR(date, 'YYYY-MM-DD') date FROM work_control WHERE worker_id = ${req.params.id} AND  was_at_work = True`
  );
  res.json({ data: result.rows });
});

/* günlük yevmiye kontrolü ekle*/
app.post("/add-worker-control", async (req, res) => {
  const result = await client.query(
    "INSERT INTO work_control (worker_id,work_id,date,employer_id,was_at_work) VALUES ($1,$2,$3,$4,$5)",
    [
      req.body.worker_id,
      req.body.work_id,
      req.body.date,
      req.body.employer_id,
      req.body.was_at_work,
    ]
  );
  res.json({ message: "Added new work", desc: result.rowCount });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
