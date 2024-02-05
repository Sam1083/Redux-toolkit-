const mongoose=require("mongoose");

const jsSchema=mongoose.Schema({
    title:{
        type:String,
        default:""
    },
    image:{
        type:String,
        default:"",
    },
    price:{
        type:String,
        default:"",
    },
    quantity:{
        type:String,
        default:"",
    },
    inStock:{
        type:Boolean,
        default:true
    }
  
},
{timestamp:true}
)

module.exports=mongoose.model("JS",jsSchema)