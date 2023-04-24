const express=require('express');
const app=express();
const mongoose=require('mongoose');
const UserModel=require('./models/Users');
mongoose.connect("mongodb+srv://anon123:FWjbdbr2zX8px2BJ@cluster0.kynj67s.mongodb.net/test");
app.get('/',(req,res)=>{
    UserModel.find({},(err,result)=>{
if(err){
res.json(err);
}else{
    res.json(result);
}
    })
})
app.listen(3001,()=>{
    console.log("server running on port 3001");
})