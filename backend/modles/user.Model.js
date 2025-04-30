import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required:true,
        unique:true,
        minlength:3,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        lowercase:true,
    }
}, { timestamps: true })

const  user = mongoose.model("user",userSchema);

export default user;
