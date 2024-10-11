const mongoose=require('mongoose');

const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://kunalbharti299:cWmp7CFQxfZVDvHo@cluster0.ix7se.mongodb.net/');

}

module.exports=connectDB;