import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool(
    {
    host:"localhost",
    user:"root",
    password:"",
    database:"test"
    }
).promise()

 export async function getNotes(){
    const [rows]= await pool.query("SELECT * FROM notes");
    return rows
}

export async function getNote(id){
    const [row]= await pool.query("SELECT * FROM notes where id=?",[id]);
    return row

}
export async function deleteNote(id){
    const del= getNote(id);
    const [rows] = await pool.query("DELETE from notes where id=?",[id]);
    return del;
}
export async function createNote(title,content){
    const [result]= await pool.query("INSERT INTO notes(title,content) VALUES(?,?)",[title,content]);
    const id = result.insertId;
    return getNote(id);
}
export async function updateNote(id,title,content){
    const [result] = await pool.query("UPDATE notes set title=?,content=? where id=?",[title,content,id]);
    return getNote(id);
}

