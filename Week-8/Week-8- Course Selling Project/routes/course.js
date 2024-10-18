const {Router}=require("express");
const { purchaseModel, courseModel } = require("../db");
const {userAuth}=require("../middleware/userMiddleware");
const courseRouter=Router();

courseRouter.post("/purchase",userAuth,async function(req,res){
    const courseID=req.body.courseID;

    await purchaseModel.create({
        userId:req.body.userId,
        courseId:courseID
    });

    res.send({
        message: "You have successfully bought the course"
    });

});


courseRouter.get("/preview",async function(req,res){
    const courses=await courseModel.find({});
    res.send({
       courses:courses
    });
});


module.exports={
    courseRouter:courseRouter
};