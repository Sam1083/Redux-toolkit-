const userData=require("../Model/userdata.model")
const bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken")

exports.store=async(req,res)=>{

     // const {password}=req.body; ---> its the Destructure the 'password' property from the request body

    const {password}=req.body;

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password=hashedPassword;
    const user=await userData.create(req.body)
    res.json({message:"User Created Successfully",status:201,success:true,userData})
}
catch(err){
    console.log(err)
}
}

exports.login = async (req, res, next) => {
    try {
        const user = await userData.findOne({ email: req.body.email });

        if (!user) {
            return res.json({ status: 404, message: 'User not found', success: false });
        }

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        if (passwordMatch) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
            return res.json({ success: true, message: 'Password matches', status: 200, token });
        } else {
            return res.json({ success: false, message: 'Password does not match', status: 400 });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Internal Server Error', status: 500 });
    }
};
exports.index=async(req,res)=>{
try{
    const user =await userData.find()
    res.json({message:"User Fetched Successfully",status:200,success:true,user})
}
catch(err){
    console.log(err)
}
}

exports.get=async(req,res)=>{
    try{
        const user =await userData.findOne({_id:req.params.id})
        if(!user){
        res.json({message:"User not found",status:404,success:false})
        }
        res.json({message:"User Fetched Successfully",status:200,success:true,user})
    }
    catch(err){
        console.log(err)
    }
    }

    exports.destroy=async(req,res)=>{
        try{
            const user =await userData.findOneAndDelete({_id:req.params.id})
            if(!user){
            res.json({message:"User not found",status:404,success:false})
            }
            res.json({message:"User Deleted Successfully",status:200,success:true})
        }
        catch(err){
            console.log(err)
        }
        }

        exports.update=async(req,res)=>{
            try{
                const user =await userData.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
                if(!user){
        res.json({message:"User not found",status:404,success:false})
                }
                res.json({message:"User Updated Successfully",status:200,success:true,user})
            }
            catch(err){
                console.log(err)
            }
            }