const { Schema, model}= require("mongoose");

const Editor =new Schema({
    content:{
        type:String,
    },
}, {timestamps:true});
 module.exports= model("editor",Editor);