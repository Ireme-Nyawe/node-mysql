import express from "express";
import { getNotes,getNote,deleteNote, createNote, updateNote } from "./database.js";
const app = express();
app.use(express.json())

app.get('/notes',async (req,res)=>{
    const notes = await getNotes();
    res.send(notes);
})

app.get('/notes/:id',async (req,res)=>{
    const notes = await getNotes();
    res.send(notes);
})
app.delete('/deletenote/:id', async (req,res)=>{
    const id= req.params.id
    const note = await deleteNote(id);
    res.send(note);
})
app.post('/notes',async (req,res)=>{
    const { title, content }= req.body
    const note = await createNote(title,content)
    res.status(201).send(note);
})
app.put('/notes/:id',async (req,res)=>{
    const {id}= req.params
    const { title, content }= req.body
    const note = await updateNote(id, title, content)
    res.status(201).send(note);
})

app.listen(5000,()=>{
    console.log("server is running on 5000");
});