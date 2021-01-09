const { Schema, model}= require("mongoose");

const Notesapp=new Schema({

    data:{
        type:String,
    },

    date:{
        type:String,
    },
    
});

 module.exports= model("notes",Notesapp);