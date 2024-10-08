const auth=(req,res,next)=>{
    const token="xyz";
    const isauth= token==="xyz";
    if(!isauth){
        res.status(401).send("unauthorized access");
    }
    else{
        next();

    }
};
module.exports={
    auth
};