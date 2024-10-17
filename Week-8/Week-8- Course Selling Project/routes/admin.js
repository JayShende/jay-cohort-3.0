const express=require("express");
const {Router}=require("express");
const {adminModel}=require("../db");
const {z}=require("zod");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const JWT_SECRET_ADMIN="Jayshende007@123";

const adminRouter=Router();


adminRouter.post("/signup",async function(req,res){
    const email=req.body.email;
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;
    const password=req.body.password;

    const schema=z.object({
        email:z.string().email(),
        firstname:z.string().min(5).max(100),
        lastname:z.string().min(5).max(100),
        password:z.string().min(5).max(100)
        .refine(
            function (password){
                return /[a-z]/.test(password);
            },
            {
                message:"Password Must Contain atleast one Lowercase Letter"
            }
        )
        .refine(
            function (password)
            {
                return /[A-Z]/.test(password);
            },
            {
                message:"Password Must Contain At Least One Uppercase Letter"
            }
        )
        .refine(
            function(password)
            {
                return /[0-9]/.test(password);
            },
            {
                message:"Password Must Contain Atleast a Single Number"
            }
        )
        .refine(
            function(password)
            {
                return /[\W_]/.test(password);
            },
            {
                message:"Password Must Contain Atleast one Special Character"
            }
        )
        
    });

    const result=schema.safeParse(req.body);
    if(result.success)
    {   console.log("hello");
        const hashedpwd=await bcrypt.hash(password,5);
        try{
            await adminModel.create({
                email:email,
                firstname:firstname,
                lastname:lastname,
                password:hashedpwd
            });
            res.send({
                message:"Signup Successfull"
            })
        }
        catch(err)
        {
            res.send({
                message:"User Already Exists"
            });
        }
    }else{
        res.send(result.error);
        return;
    }

});

adminRouter.post("/signin",async function(req,res){
    const {email,password}=req.body;

    // Check if email Exists or not 
    const response=await adminModel.findOne({
        email:email
    });
    console.log(response);
    if(response!=null)
    {
        // Check id passsword is valid or not

        const result=bcrypt.compare(password,response.password);
        
        if(result)
        {
            const token=jwt.sign({
                id:response._id.toString()
            },JWT_SECRET_ADMIN);

            res.send({
                token:token
            });
            return;
        }
    }
    else{
        // email dont exists so signup please;
        res.send({
            message:"Signup Please"
        });
        return;
    }
});

adminRouter.post("/course",function(req,res){ //add course

});

adminRouter.put("/course",function(req,res){ //update course

});

adminRouter.get("/course/bulk",function(req,res){

});

adminRouter.delete("/delete",function(req,res){

});

module.exports={
    adminRouter:adminRouter
}