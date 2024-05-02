import express from "express";
import { selectNotes, selectNote, insertNote } from "./connection.js";
const app = express();
app.use(express.json());

app.get("/notes", async (req, res) => {
  const [result] = await selectNotes();
  res.send(result);
});
app.get("/note/:id", async (req, res) => {
  const id = req.params.id;
  const [result] = await selectNote(id);
  //  console.log(result);
  res.send(result);
});
app.post("/newnote", async (req, res) => {
  const { title, content } = req.body;
  const result = await insertNote(title, content);
  res.send(result);
});

app.listen(8000, () => {
  console.log("Server is running!");
});
