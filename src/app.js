const express=require('express');
const app=express();

app.use('/',(req,res)=>{
    res.send("hello at server")
})

app.use('/kaki',(req,res)=>{
    res.send("hello kaki")
})

app.listen(3000,()=>{
    console.log("server starting at port 3000....")
})