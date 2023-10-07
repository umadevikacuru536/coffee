const express=require("express");  // IMPORTING EXPRESS MODULE FROM THIRD PARTY PACKAGE
const mongoose=require("mongoose"); // IMPORTING MONGOOSE
const cors=require("cors"); // IMPORTING CORS
const coffeeshop=require("./usersData")



const app=express()
app.use(express.json())  // ACCEPTING JSON FORMAT DATA AND PARSING TO LOCAL USER

app.use(cors({origin: "*"}))

//mongo db conncetion WITH NODEJS
mongoose.connect("mongodb+srv://umadevikavuru:umadevi1234@cluster0.drlbwri.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>console.log("db connected"))
.catch((err)=>console.log(err.message))



// main api
app.get("/",(req,res)=>{
    res.send("hello world")
})






app.post("/data",async(req,res)=>{
    try {
        const {
          title,
          description,
          price,
          Img}=req.body;
  
    
        let newUser = new coffeeshop({
          title,
          description,
          price,
          Img
        });
  
        const isUserExist = await coffeeshop.findOne({"" : "" });
        if (isUserExist) {
          return res.send("user already registered");
        }
        
          newUser.save(); //saving to mongodb collections
          res.send("user created succesfully");  
      }
       catch (e) {
        console.log(e.message);
        res.send("internal server error");
      }
    });





app.listen(5040,()=>{

  console.log("server running")
})


