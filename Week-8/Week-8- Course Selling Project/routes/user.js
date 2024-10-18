const {Router}=require("express");
const {userModel}=require("../db");
const userRouter=Router();
const {z}=require("zod");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_SECRET_USER}=require("../config");
const {userAuth}=require("../middleware/userMiddleware");


userRouter.post("/signup",async function(req,res){
   const {email,password,firstname,lastname}=req.body;

    // input validation using zod
    const schema=z.object({
        email:z.string().min(5).max(100).email(),
        firstname:z.string().min(1).max(100),
        lastname:z.string().min(1).max(100),
        password:z.string().min(5).max(20)
        .refine(
            function(password)
            {
                return /[a-z]/.test(password);
            },
            {
                message:"Passoword Must Contain At Least one Lowecase Letter"
            }
        )
        .refine(
            function(password)
            {
                return /[A-Z]/.test(password);
            },
            {
                message:"The Password Must Contain At Least one Uppercase Letter"
            }
        )
        .refine(
            function(password)
            {
                return /[0-9]/.test(password);
            },
            {
                message:"The Password Must Contain At Least one Number "
            }
        )
        .refine(
            function(password)
            {
                return /[\W_]/.test(password);
            },
            {
                message:"The Password Must Contain Atleast one Special Character"
            }
        )
    });

    const result=schema.safeParse(req.body);

    if(result.success)
    {   
        const hashedpwd=await bcrypt.hash(password,5);
        // Proceed with Signup
        try{
            await userModel.create({
                email:email,
                password:hashedpwd,
                firstname:firstname,
                lastname:lastname
            });
            res.json({
                message:"Signup Successfull"
            });
            return;
        }
        catch(err)
        {
            res.send({
                message:"Email Already in Use"
            });
            return;
        }
    }
    else{
        res.send(result.error);
        return;
    }

});

userRouter.post("/signin",async function(req,res){
    const {email,password}=req.body;

    const response=await userModel.findOne({
        email:email
    });

    if(response!=null)
    {
        // Proceed with the Signin
        const result=await bcrypt.compare(password,response.password);
        if(result)
        {
            const token=jwt.sign({
                id:response._id.toString()
            },process.env.JWT_SECRET_USER);

            res.send({
                token:token
            });
            return;
        }
        else{
            res.send({
                message:"Invalid Password"
            });
            return;
        }
    }
    else{
        res.send({
            message:"Signup Please"
        });
    }
    
});

userRouter.post("/purchase",userAuth,async function(req,res){
    // preview courses
    

});


module.exports={
    userRouter:userRouter
};