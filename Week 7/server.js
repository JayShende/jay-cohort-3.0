const express=require("express");
// const UserModel=require("./db");
// const TodosModel=require("./db");


const {auth}=require("./auth");

const jwt=require("jsonwebtoken");
const JWT_SECRET="JayShende007@";


const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Jayshende:S12Ce8MKll5AtCPl@cluster0.i3qcn.mongodb.net/todo-app-database")
//  or we can also do at once as
const {UserModel,TodosModel}=require("./db");


const app=express();
app.use(express.json());


// Writting an Auth Middleware which checks weather the token recived as valid or not




app.post("/signup",async function(req,res){
    
    // We Should Check First Weather the credentials have been used or not and then work accordingly
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;

    await UserModel.create({
        name:name,
        email:email,
        password:password
    });

    res.json({
        message:"You Are Now Signed in"
    })
     
});


app.post("/signin",async function(req,res){

    // This endpoint Check if the Credentails are avaliable in the db and then issue an token accordingly
    const email=req.body.email;
    const password=req.body.password;

    const response=await UserModel.findOne({
        email:email,
        password:password
    });
    console.log(response);
    if(response)
    {
        const token=jwt.sign({
            id:response._id.toString() // its an object so we have to convert it to string to continue
        },JWT_SECRET);
        res.json({
            token:token
        });
    }
    else{
        res.status(403).send({
            message:"Incorrect Credentials"
        });
    }
});


// Both the Below Todos are Authenticated ie Can Only Be Hittted when the User is Loggedin

app.post("/todos",auth,async function(req,res){
    // res.send(req.userID);
    const title =req.body.title;
    await TodosModel.create({
        UserId:req.userID,
        title:title,
        done:false
    });

    res.json({
        message:"To Added"
    });
});

// The Below Api Endpoint is used to Retrive all The Todos Specific to a User

app.get("/todos",auth,async function(req,res){
    const response=await TodosModel.find({
        UserId:req.userID
    });

    res.send(response);
});

app.listen(3000);