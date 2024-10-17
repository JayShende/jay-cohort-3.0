const jwt=require("jsonwebtoken");
const JWT_SECRET_USER="Jayshende007@123";

function auth(req,res,next)
{
    const authHeader=req.body.authorization;
    const token =authHeader.token;

    try{
        const decoded=jwt.verify(token,JWT_SECRET_USER);
    }
    catch(err)
    {
        res.send({
            "message":"Token Validation Failed"
        })
        return;
    }

    req.userId=decoded._id;
    next();
}