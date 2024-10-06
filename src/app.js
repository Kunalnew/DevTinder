const express=require('express');
const app=express();

app.get('/kaki',(req,res)=>{
    res.send("hello kaki")
});

app.post('/kaki',(req,res)=>{
    res.send("posted hello at server")
});

app.delete('/kaki',(req,res)=>{
    res.send("deleted hello at server")
});

app.listen(3000,()=>{
    console.log("server starting at port 3000....")
});