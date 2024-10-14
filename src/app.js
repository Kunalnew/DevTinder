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

app.get('/user',async (req,res)=>{
        const  userEmail=req.body.email;
        try{
          const user= await User.findOne({email:userEmail}).exec();
          if(user.length===0){
            res.status(404).send('user not found');
          }
          else {
            res.send(user);
          }
        }
        catch(err){
           res.status(400).send("something went wwrong");
        }
})

app.delete('/delete',async (req,res)=>{
    const userID=req.body.userID;
   try{
      const user= await User.findByIdAndDelete(userID);
      res.send("user deleted successfully");
   }
   catch(err){
      res.status(400).send("error encountered");
   }
});

app.patch('/update',async (req,res)=>{
   const userID=req.body.userID;
   const userData=req.body;
  try{
     const user= await User.findByIdAndUpdate(userID,userData);
     res.send("user updated successfully");
  }
  catch(err){
     res.status(400).send("error encountered");
  }
})

app.get('/feed',async (req,res)=>{
     try{
        const user=await User.find({});
        res.send(user);
     }
     catch(err){
        res.status(400).send("something went wwrong");
   }
})

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

