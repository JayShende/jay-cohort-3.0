import { Pool } from "pg";
import express  from "express";

const app=express();
app.use(express.json());

const url:string="postgresql://neondb_owner:npg_3zXYDbGrs2FR@ep-super-frog-a580tmw4-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require";

const pool = new Pool({ connectionString:url });



app.post("/createUser",async(req,res)=>{
  const {username,email,password,city,country,street,pincode}=req.body;

  try{
    const result=await pool.query("INSERT INTO USERS(username,email,password) VALUES($1,$2,$3) RETURNING * ;",[username,email,password]);
    const userid:string=result.rows[0].id;
    const addAddress=await pool.query("INSERT INTO addresses(user_id,city,country,street,pincode) VALUES($1,$2,$3,$4,$5) RETURNING *; ",[userid,city,country,street,pincode]);
    res.send({
      message:"User Created Successfully",
      user:result.rows[0],
      address:addAddress.rows[0]
    })
    return;
  }
  catch(error)
  {
    res.send({message:"Some Error at the Database Level",
      error:error
    });
    return ;
  }
})

app.get("/fetchAllUsers",async(req,res)=>{
  try{
    const result=await pool.query("SELECT * FROM USERS");
    res.send({Message:"Query Execuion Successfull",
      users:result.rows
    })
  return;
  }
  catch(error)
  {
    res.send({Message:"Some Error at the Database Level",
      error:error
    })
  }
})

app.put("/update",async(req,res)=>{
  const {password,email}=req.body;
  const query="UPDATE users SET password = $1 WHERE email = $2 RETURNING *;"
  // const result=await pool.query("UPDATE users SET password = '$1' WHERE email = '$2';")
  
  try{
    const result=await pool.query(query,[password,email]);
    res.send({Message:"Query Exececuted Successfully",
      result:result.rows[0]
    })
    return;
  }
  catch(error)
  {
    res.send({Message:"Some Error At the Database Level",
      error:error
    });
    return;
  }

})

app.listen(3000);