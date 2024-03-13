
const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{ type:String,required:true},
        
        phone:{type:String,required:true},
        message:{type:String,required:true},
        
        createdAt:{type:Date,default:Date.now}
    })
    


let UserModel = mongoose.model('user',UserSchema)
module.exports={UserModel}