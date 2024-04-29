import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const connection = mysql.createPool( {
    host:process.env.MYSQL_HOST,
    user:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
    }).promise()

async function selectNotes(title,content){
    const selectNotes=connection.query("INSERT into notes values(null,?,?)",[title,content]);
    return selectNotes;
}
const [result]=await selectNotes("testing tiltle","testing content");
console.log(result);
