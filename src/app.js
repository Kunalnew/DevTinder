const express=require('express');
const app=express();
const {auth}=require('./middleware/auth.js');

app.use('/main',auth);

app.get('/main/get',(req,res)=>{
    console.log("main/get");
    res.send("/main/get done");
});

app.post('/main/post',(req,res)=>{
    console.log("main/post");
    res.send("/main/post done");
});

app.use('/',(err,req,res,next)=>{
    if(err)
    res.status(500).send("error encountered")
})

app.listen(3000,()=>{
    console.log("server starting at port 3000....")
});