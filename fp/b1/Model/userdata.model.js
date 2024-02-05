const mongoose=require("mongoose");

const userDataSchema=mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:"",
    },
    phone:{
        type:String,
        default:"",
    },
    password:{
        type:String,
        default:"",
    },

  
},
{timestamp:true}
)

module.exports=mongoose.model("userData",userDataSchema)