const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/auth");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/auth");
const { runValidation } = require("../validators");

router.post("/signup", userSignupValidator, runValidation, signUp);
router.post("/signin", userSigninValidator, runValidation, signIn);

module.exports = router;