const express=require('express');
const app=express();

app.use('/main',(req,res,next)=>{
    console.log("first");
    // res.send("hello kaki");
    next();
},(req,res,next)=>{
     console.log("second");
    //  res.send("second");
     next();
},(req,res)=>{
    console.log("third");
    res.send("third");
});



app.listen(3000,()=>{
    console.log("server starting at port 3000....")
});