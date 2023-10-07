const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
   
 
    title:{
        type:String,
        require:true,
    },
    description:{
    type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    Img:{
        type:String,
        require:true,
    },
})

const coffeeshop=mongoose.model("coffeeshop",productSchema);
module.exports =coffeeshop;