const express=require("express")
const app=express();
const jwt=require("jsonwebtoken")

let users=[];

const JWT_SECRET="Jayshende007@"


app.use(express.json());

app.post("/signup",(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    users.push({
        username:username,
        password:password
    });

    res.send({
        message:"Signup Successfull"
    })
})


app.post("/signin",(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    const user=users.map(()=>{
        if(users.username===username && users.password===password)
        {
            return true;
        }
        return false;
    })

    if(user)
    {
        const token=jwt.sign({
            username:username
        },JWT_SECRET);

        res.send({
            token:token
        })
    }
    else{
        res.send({
            message:"Invalid Credentials"
        })
    }
})  


app.get("/me",(req,res)=>{

    const token=req.headers.authorization;

    try{
        const user=jwt.verify(token,JWT_SECRET);
        res.send({
            username:user.username
        })
    }
    catch(e)
    {
        res.sendStatus(403)
    }
})



app.listen(3000);