const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const auth =require("../middleware/auth")



exports.signUp = (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !password || !email)
  {
    return res.status(400).json({msg:"pls enter all fields"});
  }
  User.findOne({ email }).exec((err, user) => {
    if (err) {
      console.log(err);

      return res.status(422).json({
        error: "Something went wrong!!",
      });
    }

    if (user) {
      return res.status(400).json({
        error: "Email already exists.",
      });
    }

   

    let newUser = new User({ name, email, password });

    newUser.save((userData) => {
    
      const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
        expiresIn: 3600
      });
     return res.json({
       token,
        message: `Hey ${name}, welcome to the app!!`,   
      });
    })
  });
};



exports.signIn = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User with the email specified doesn't exist.",
      });
    }

    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Password is incorrect.",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const { _id, name, role, email } = user;

    return res.json({
      token,
      user: {
        _id,
        email,
        role,
        name,
      },
      message: "Signed in successfully",
    });
  });
};

exports.getUser=(req,res)=>{
      const user =  User.findById(req.user._id).select('-hashed_password')
    .then(user=> res.json(user))
}
