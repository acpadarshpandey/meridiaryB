const Notes = require("../models/impdates/notes");


exports.showNotes=(req,res,next) =>  {
        Notes.find().exec((err,NotesList)=>{
            if(err) console.log(err);
            else{
                res.send({NotesList:NotesList});
            }
        });
    };

exports.addNotes=async (req,res) =>  {
   const notes= new Notes(req.body)
      console.log(notes)

    try{
        const data= await notes.save()
        console.log(data)
        return res.json(data)
    }
    catch(err){
        res.send(err)
    }
//      console.log(req.body)
//    notes.save((err,NotesList) =>{
//     if(err) return res.send("ERROR");
//      return res.json(NotesList);
// });

};
exports.deleteNotes=(req, res, )=> {
     const id=req.params.id;
     console.log(id);
    Notes.findByIdAndRemove({_id:id},err=>{
     if(err)
      console.log(err);
     else {
      res.json({status:"success", message: " deleted successfully!!!"});
     }
    });
   };
 