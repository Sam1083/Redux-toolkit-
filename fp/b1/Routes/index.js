const express=require("express")
const router=express.Router();
const jsRoute=require("./js.route")
const userDataRoute=require("./userdata.route")
 



router.use("/js",jsRoute)

router.use("/userData",userDataRoute)




// router.get("/daraz", async (req, res) => {
//   try {
//     const data = await YourModel.find(); // Replace YourModel with your actual model
//     res.json(data);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });


module.exports=router;
