const express = require("express");
const router = express.Router();
const { signUp, signIn,getUser } = require("../controllers/auth");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");
const auth=require("../middleware/auth")

router.post("/signup", userSignupValidator, runValidation, signUp);
router.post("/signin", userSigninValidator, runValidation, signIn);
router.get("/getuser",getUser);


module.exports = router;