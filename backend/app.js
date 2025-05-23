const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const client = require("./db/conn.js");
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
const authRoutes = require("./Routes/auth.js");
app.use("/auth", authRoutes);
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
/* iş'i sil  */
app.delete("/work/:id", async (req, res) => {
  const result = await client.query(
      `DELETE FROM works WHERE id = ${req.params.id}`
  );
  res.json({ message: "Deleted work", desc: result.rowCount });
});

/* çalışan'ı  sil  */
app.delete("/worker/:id", async (req, res) => {
  const result = await client.query(
      `DELETE FROM workers WHERE id = ${req.params.id}`
  );
  res.json({ message: "Deleted worker", desc: result.rowCount });
});
/* çalışan bilgilerini güncelle */
app.put("/workers", async (req, res) => {
  const result = await client.query(
    `UPDATE workers SET name = $1 , surname = $2, phone_number=$3, mail =$4 ,work_id = $5,wage = $6  WHERE id = $7`,
    [
      req.body.name,
      req.body.surname,
      req.body.phone_number,
      req.body.mail,
      req.body.work_id,
      req.body.wage,
      req.body.id,
    ]
  );
  res.json({ message: "Updated new work", desc: result.rowCount });
});

//! çalışan işten çıkarıla basılırsa work_id si 0 olarak güncellenir
app.put("/updateworkid/:id", async (req, res) => {
  const result = await client.query(
    `UPDATE workers SET work_id = 0  WHERE id = $1`,
    [
      req.params.id
    ]
  );
  res.json({ message: "Updated new work", desc: result.rowCount });
});
/* işi bilgilerini güncelle */
app.put("/works", async (req, res) => {
  const result = await client.query(
    `UPDATE works SET work_name = $1 , work_desc = $2, address =$3, cost_of_work =$4 WHERE id = $5`,
    [
      req.body.work_name,
      req.body.work_desc,
      req.body.address,
      req.body.cost_of_work,
      req.body.work_id
    ]
  );
  res.json({ message: "Updated worker's work id 0", desc: result.rowCount });
});

/*! işleri getir !*/
app.get("/works/:sessionid", async (req, res) => {
  const result = await client.query(
    "SELECT *,TO_CHAR(work_start_date, 'DD-MM-YYYY') AS date FROM works WHERE employer_id = $1",
    [req.params.sessionid]
  );
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
app.get("/workers/:sessionid", async (req, res) => {
  const result = await client.query(
    `SELECT
  workers.*,
  COALESCE(works.work_name, 'İşi Yok') AS work_name
FROM
  workers
LEFT JOIN
  works ON workers.work_id = works.id
WHERE
  workers.employer_id  = $1`,
    [req.params.sessionid]
  );
  res.json({ data: result.rows });
});

/* id'sine göre çalışanın bilgilerini ve çalıştığı iş hakkındaki bilgileri getir  (worker sayfası)*/
app.get("/worker/:id", async (req, res) => {
  const result = await client.query(
    `SELECT *FROM workers  WHERE id = ${req.params.id};`
  );
  res.json({ data: result.rows });
});

/* id'sine göre çalışanı getir  */
app.get("/workerandwork/:id", async (req, res) => {
  const result = await client.query(
    `SELECT
  workers.*,
  COALESCE(works.work_name, 'İşi Yok') AS work_name,
  TO_CHAR(work_start_date, 'DD - MM - YYYY') AS date
FROM
  workers
LEFT JOIN
  works ON workers.work_id = works.id
WHERE
  workers.id = ${req.params.id};
`
  );
  res.json({ data: result.rows[0] });
});

/* çalışanın id sine göre çalıştığı işin id'sini ve iş adını getir */
app.get("/workbyworker/:id/:sessionid", async (req, res) => {
  const result = await client.query(
    `select id,work_name from works where id = (select work_id from workers where id = ${req.params.id} AND employer_id = ${req.params.sessionid});`
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

/* wallet worker  sayfası gereken veriler*/
app.get("/walletworkersdata/:sessionid", async (req, res) => {
  const result = await client.query(
    `SELECT
      w.*,
      COALESCE(wp.amount_paid, 0) AS amount_paid,
      COALESCE(wc.work_days_count, 0) AS days_worked,
      wc.workeddays
    FROM workers w
    LEFT JOIN (
      SELECT
        worker_id,
        SUM(amount_paid) AS amount_paid
      FROM worker_payments
      GROUP BY worker_id
    ) wp ON w.id = wp.worker_id
    LEFT JOIN (
      SELECT
        worker_id,
        COUNT(*) AS work_days_count,
        array_agg(TO_CHAR(date, 'YYYY-MM-DD')) AS workeddays
      FROM work_control
      WHERE was_at_work = TRUE
      GROUP BY worker_id
    ) wc ON w.id = wc.worker_id
    WHERE w.employer_id = $1`,
    [req.params.sessionid]
  );
  res.json({ data: result.rows });
});
/* wallet worker data sayfası gereken veriler*/
app.get("/walletworkerdata/:id/:sessionid", async (req, res) => {
  const result = await client.query(`SELECT
  w.*,
  TO_CHAR(w.registration_date, 'DD-MM-YYYY') AS registration_date,
  COALESCE(wp.total_payments, 0) AS total_payments,
  COALESCE(wp.payment_details, ARRAY[]::JSON[]) AS payments,
  COALESCE(wc.days_worked, 0) AS days_worked,
  COALESCE(wc.work_dates, ARRAY[]::TEXT[]) AS work_dates
FROM workers w
LEFT JOIN (
  SELECT
    worker_id,
    SUM(amount_paid) AS total_payments,
    array_agg(
      json_build_object(
        'id', id,
        'amount_paid', amount_paid,
        'amount_paid_time', TO_CHAR(amount_paid_time, 'DD-MM-YYYY')
      )
    ) AS payment_details
  FROM worker_payments
  GROUP BY worker_id
) wp ON w.id = wp.worker_id
LEFT JOIN (
  SELECT
    worker_id,
    array_agg(TO_CHAR(date, 'YYYY-MM-DD')) AS work_dates,
    array_length(array_agg(TO_CHAR(date, 'YYYY-MM-DD')), 1) AS days_worked
  FROM work_control
  WHERE was_at_work = TRUE
  GROUP BY worker_id
) wc ON w.id = wc.worker_id
WHERE w.id = ${req.params.id} AND w.employer_id = ${req.params.sessionid};
`);
  res.json({ data: result.rows });
});

/*! çalışan ödemesi ekle !*/
app.post("/worker-payment", async (req, res) => {
  const result = await client.query(
    "INSERT INTO worker_payments (worker_id,amount_paid,employer_id) VALUES ($1,$2,$3)",
    [req.body.worker_id, req.body.amount_paid, req.body.employer_id]
  );
  res.json({ message: "Added new worker payment", desc: result.rowCount });
});

/*! işin ödemelerini getir !*/
app.get("/workpayments/:id", async (req, res) => {
  const result = await client.query(
    `SELECT *,TO_CHAR(date, 'DD-MM-YYYY') AS formatted_date FROM work_payments WHERE work_id = ${req.params.id}`
  );
  res.json({ data: result.rows });
});

/*! işin ödemelerinin toplamını getir !*/
app.get("/walletworks/:sessionid", async (req, res) => {
  const result = await client.query(
    `SELECT  w.*,  COALESCE(SUM(wp.amount_received), 0) AS total_amount_received FROM works w LEFT JOIN work_payments wp ON w.id = wp.work_id WHERE w.employer_id = ${req.params.sessionid} GROUP BY  w.id, w.employer_id, w.work_name, w.work_desc,  w.work_start_date, w.work_finish_date, w.address, w.cost_of_work;`
  );
  res.json({ data: result.rows });
});

/* hem iş verilerini hem iş ödemelerini getir  */
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
  res.json({ message: "Added new work payment", desc: result.rowCount });
});

/* günlük yevmiye kontrolü ekle*/
app.get("/worker-controls", async (req, res) => {
  const result = await client.query("SELECT * FROM work_control");
  res.json({ data: result.rows });
});

/* çalışan çalıştığı günleri getir*/
app.get("/workeddays/:id", async (req, res) => {
  const result = await client.query(
    `SELECT ARRAY_AGG(TO_CHAR(date, 'YYYY-MM-DD')) AS workedDays FROM work_control WHERE worker_id = ${req.params.id} AND  was_at_work = True`
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
  res.json({ message: "Added new work control", desc: result.rowCount });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
