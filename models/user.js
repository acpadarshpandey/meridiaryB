const  mongoose  = require("mongoose");
const crypto= require("crypto")

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        trim: true,
        require:true,
        max:32
    },
    email:{
        type:String,
        trim:true,
        require:true,
        unique:1,
        lowercase:true,
    },
    hashed_password:{
        type:String,
        require: true,
    },
    salt:String,
        role:{
            type:String,
            default:'subscriber',

        },
        resetPasswordLink :{
            data:String,
            default:'',
        },
        Notes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:'notes'
            }
        ],
        Diaryentry:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'editor'
            }

        ]

    
},{timestamps:true})

  UserSchema.methods={
      makeSalt: function (){
          return Math.round(new Date().valueOf() * Math.random()+ "" );
      },
       encryptPassword: function (password) {
           if(!password) return "";

           try {
               return crypto
               .createHmac("Sha1", this.salt)
               .update(password)
               .digest("hex");
              }
              catch(err){
                  return err;
              }
       },
        authenticate: function(plainPassword){
            return this.encryptPassword(plainPassword) === this.hashed_password;

        }
  };
      UserSchema.virtual("password")
       .set(function (password) {
           this._password=password;
        
           this.salt= this.makeSalt();

           this.hashed_password= this.encryptPassword(password);
       })
       .get(function (){
           return this._password
       });

module.exports=mongoose.model("User",UserSchema);
