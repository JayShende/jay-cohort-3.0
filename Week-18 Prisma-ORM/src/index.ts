import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient();
const app=express();
app.use(express.json());


app.post("/addUser",async (req,res)=>{
    const {username,password,age,city}=req.body;
   try{
    const newEntry=await client.user.create({
        data:{
            username:username,
            password:password,
            age:age,
            city:city
        }
    })
    res.send({
        message:"Data Added Successfully",
        data:newEntry
    })
   }
   catch(error){
    res.send({
        message:"Some Error While Inserting The Data into The database",
        error:error
    });
    return;
   }
})

app.post("/addTodo",async(req,res)=>{
    
    const {user_id,title,description}=req.body;
   try{
    const newEntry= await client.todos.create({
        data:{
            user_id:user_id,
            title:title,
            description:description,
            done:false
        }
    });
    res.send({
        message:"Todo Added Successfully",
        data:newEntry
    })
   }
   catch(error){
    res.send({
        message:"Some Error While Adding the Data",
        error:error
    });
    return;
   }
})

app.get("/fetchAll",async(req,res)=>{
    const data=await client.user.findMany();
    res.json({
        data
    });
})

app.get("/fetchId/:id",async(req,res)=>{
    const userId=parseInt(req.params.id);
    const data=await client.user.findFirst({
        where:{
            id:userId
        },
        include:{
            todos:true,
            // use
            // rname:true
        }
    })
    res.json({
        data
    })
})

app.listen(3000);

