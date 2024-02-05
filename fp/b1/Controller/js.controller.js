const JS=require("../Model/js.model")

exports.store=async(req,res)=>{
    try{
    const js =await JS.create(req.body)
    res.json({message:"JS Created Successfully",status:201,success:true,js})
}
catch(err){
    console.log(err)
}
}

exports.index=async(req,res)=>{
try{
    const js =await JS.find()
    res.json({message:"JS Fetched Successfully",status:200,success:true,js})
}
catch(err){
    console.log(err)
}
}

exports.get=async(req,res)=>{
    try{
        const  js =await JS.findOne({_id:req.params.id})
        if(!js){
          res.json({message:"JS not found",status:404,success:false})
        }
        res.json({message:"JS Fetched Successfully",status:200,success:true, js})
    }
    catch(err){
        console.log(err)
    }
    }

  
    exports.destroy=async(req,res)=>{
        try{
            const  js =await JS.findOneAndDelete({_id:req.params.id})
            if(!js){
    res.json({message:"JS not found",status:404,success:false})
            }
            res.json({message:"JS Deleted Successfully",status:200,success:true})
        }
        catch(err){
            console.log(err)
        }
        }

        exports.update=async(req,res)=>{
            try{
                const  js =await JS.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
                if(!js){
        res.json({message:"JS not found",status:404,success:false})
                }
                res.json({message:"JS Updated Successfully",status:200,success:true, js})
            }
            catch(err){
                console.log(err)
            }
            }