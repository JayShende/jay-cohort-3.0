const express=require("express");

// Importing The Routers
const {userRouter}=require("./routes/user");
const {courseRouter}=require("./routes/course");

const app=express();

// specifing the Router 
app.use("/user",userRouter);
app.use("/course",courseRouter); // when req at /course/--  go to the courseRouter

app.listen(3000);