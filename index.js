fetch("http://localhost:7000/notes")
.then(res=>res.json())
.then(data=>{
    console.log(data);
})