const jwt=require("jsonwebtoken");
// const {JWT_SECRET_ADMIN}=require("../config");

function adminAuth(req,res,next)
{
    const token=req.headers.authorization;
    // const token =authHeader.token;
    console.log(token);

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_ADMIN);
        console.log(decoded);
        req.adminId=decoded.id; // Decoded is only accessiable in this scope only
    }
    catch(err)
    {
        res.send({
            "message":"Token Validation Failed"
        })
        return;
    }
    
    next();
}

module.exports={
    adminAuth:adminAuth
};