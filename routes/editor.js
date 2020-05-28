const express = require("express");
const router= express.Router();
const {showContent,addContent,deleteContent} = require("../controllers/editor");

router.get("/showContent",showContent);
router.post("/addContent", addContent);
router.delete("/deleteContent/:id", deleteContent);


module.exports = router;
