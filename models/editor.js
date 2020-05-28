const { Schema, model}= require("mongoose");

const Editor =new Schema({
    content:{
        type:String,
    },
    writer:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
}, {timestamps:true});
 module.exports= model("editor",Editor);