const express = require("express");
const router= express.Router();
const { showNotes, addNotes, deleteNotes} = require("../controllers/notes");
const auth =require("../middleware/auth")

router.get("/showNotes",showNotes);
router.post("/addnotes", addNotes);
router.delete("/deleteNotes/:id", deleteNotes);


module.exports = router;

