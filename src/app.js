const express=require('express');
const app=express();
const connectDB=require('./config/database.js')
const {auth}=require('./middleware/auth.js');
const User = require('./models/user.js');
app.use(express.json());

app.post('/sign',async (req,res)=>{
 
    const user = new User(req.body);
    
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

