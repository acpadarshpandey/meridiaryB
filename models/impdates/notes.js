const { Schema, model}= require("mongoose");

const Notesapp=new Schema({

    data:{
        type:String,
    },

    date:{
        type:String,
    },
    writer:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
});

 module.exports= model("notes",Notesapp);