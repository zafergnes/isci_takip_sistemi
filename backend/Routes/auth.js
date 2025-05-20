const express = require("express");
const router = express.Router();
const client = require("../db/conn.js");

router.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  const result = await client.query("SELECT * FROM employers WHERE mail = $1", [
    mail,
  ]);
  const user = result.rows[0];
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Email ya da şifre hatalı" });
  }
  res.json({ id: user.id, name: user.name });
});

module.exports = router;
// router.post("/login", async (req, res) => {
//   const { mail, password } = req.body;
//   const result = await client.query(
//     "INSERT INTO employers (name,surname,phone_number,mail,password) VALUES ($1,$2,$3,$4,$5)",
//     [
//       req.body.name,
//       req.body.surname,
//       req.body.phone_number,
//       req.body.mail,
//       req.body.password,
//     ]
//   );
//   const user = result.rows[0];
//   if (!user || user.password !== password) {
//     return res.status(401).json({ message: "Email ya da şifre hatalı" });
//   }
//   res.json({ id: user.id, name: user.name });
// });

// module.exports = router;
