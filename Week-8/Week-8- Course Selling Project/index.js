const express=require("express");
require('dotenv').config();
// Importing The Routers
const {userRouter}=require("./routes/user");
const {courseRouter}=require("./routes/course");
const {adminRouter}=require("./routes/admin");
const { mongoose } = require("mongoose");


const app=express();
app.use(express.json());

// Connecting To The MongoDB

async function main()
{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to Databse");
        app.listen(3000);
    }
    catch(err)
    {
        console.log("Unable to Connect the DB");
    }

}
main();
// console.log(process.env.JWT_SECRET_USER);
// specifing the Router 
app.use("/user",userRouter);
app.use("/course",courseRouter); // when req at /course/--  go to the courseRouter
app.use("/admin",adminRouter);

