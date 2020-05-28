const express = require ("express");
const morgan= require("morgan")
const cors =require("cors")
const bodyParser =require("body-parser")
const PORT=process.env.PORT||8080;
require("dotenv").config();
const mongoose =require("mongoose");
const authRoutes =require("./routes/auth")
const impDates = require("./routes/notes")
const editors= require("./routes/editor")
const app = express();
 app.use(morgan("dev"));

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}))


 app.use(cors());


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true

}).then(()=>console.log("DB connected" ))
.catch((err)=>console.log("db connection Failed",err));

app.get("/",(req,res)=>{
    res.json({message: "server is working"});

})

  app.use("/api",authRoutes);

  app.use("/impdates",impDates);

  app.use("/editor",editors);


app.listen(PORT,()=>{
    console.log(`App is running at  ${PORT}-${process.env.NODE_ENV}`);
});