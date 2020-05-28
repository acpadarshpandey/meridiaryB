const content = require("../models/editor");


exports.showContent=(req,res,next) =>  {
        content.find({}).exec((err,List)=>{
            if(err) console.log(err);
            else{
                res.send({List:List});
            }
        });
    };

exports.addContent=(req,res) => {
   const newContent= new content(req.body)
     //console.log(req.body)
   newContent.save((err,List) =>{
    if(err) return res.send("ERROR");

return res.json(List);
});

};
exports.deleteContent=(req, res, )=> {
     const id=req.params.id;
    /// console.log(id);
    content.findByIdAndRemove({_id:id},err=>{
     if(err)
      console.log(err);
     else {
      res.json({status:"success", message: " deleted successfully!!!"});
     }
    });
   };
 