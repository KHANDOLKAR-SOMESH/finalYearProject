import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required :true,
    },
    
    details:{
        type:String,
        required:true
    },
    result:{
        type:String,
        required:true,

    }

},{ timestamps: true });

const history= mongoose.model("history", historySchema);

export default history;