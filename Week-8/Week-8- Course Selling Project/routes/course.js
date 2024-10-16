const {Router}=require("express");

const courseRouter=Router();

courseRouter.post("/purchase",function(req,res){

});


courseRouter.get("/preview",function(req,res){
    res.send({
        "msg":"inside the course/preview route"
    })
});


module.exports={
    courseRouter:courseRouter
};