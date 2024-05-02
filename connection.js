import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();
export async function selectNotes() {
  const result = pool.query("SELECT * from notes");
  return result;
}

export async function selectNote(id) {
  const result = pool.query(`SELECT * from notes where id=?`, [id]);
  return result;
}

export async function insertNote(title,content) {
  const [result] = await pool.query(
    "INSERT into notes values(null,?,?)",[title,content]
  );
  const id=result.insertId;
  const [data] = await selectNote(id);
  return data;
}

