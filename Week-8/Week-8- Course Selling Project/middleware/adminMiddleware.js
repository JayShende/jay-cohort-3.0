const jwt=require("jsonwebtoken");
// const {JWT_SECRET_ADMIN}=require("../config");

function adminAuth(req,res,next)
{
    const authHeader=req.body.authorization;
    const token =authHeader.token;

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_ADMIN);
    }
    catch(err)
    {
        res.send({
            "message":"Token Validation Failed"
        })
        return;
    }

    req.adminId=decoded._id;
    next();
}

module.exports={
    adminAuth:adminAuth
};