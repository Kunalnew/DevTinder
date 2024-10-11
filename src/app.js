const express=require('express');
const app=express();
const connectDB=require('./config/database.js')
const {auth}=require('./middleware/auth.js');
const User = require('./models/user.js');

app.post('/sign',async (req,res)=>{
 
    const user = new User({
      firstName: "kunal",
      lastName: "sir",
      email: "kunal@sir.in", 
      password: "1234",
    });
    
    try{
      await user.save();
      res.send("user send successfully");
    }
    catch(err){
       res.status(400).send("error encountered"+ err.message);
    }
  
});

connectDB()
   .then(()=>{
       console.log('database connection established');
       app.listen(3000,()=>{
        console.log("server starting at port 3000....")
    });
   })
   .catch((err)=>{
      console.log('error encountered');
   })

