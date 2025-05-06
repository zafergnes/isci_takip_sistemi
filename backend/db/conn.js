//baglantı

const { Client } = require('pg');
const client = new Client({
  user: "postgres",
  password: "1221",
  host: "localhost",
  port: 5432,
  database: "follow_the_worker",
});

async function check() {
  await client.connect();
  // const res = await client.query("SELECT * FROM works");
  // console.log(res.rows[0]);
  // await client.end();
}
check();
module.exports = client;