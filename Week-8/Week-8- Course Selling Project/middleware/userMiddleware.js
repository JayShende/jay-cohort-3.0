const jwt=require("jsonwebtoken");
// const {JWT_SECRET_USER}=require("../config");

function userAuth(req,res,next)
{
    const authHeader=req.body.authorization;
    const token =authHeader.token;

    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET_USER);
    }
    catch(err)
    {
        res.send({
            "message":"Token Validation Failed"
        })
        return;
    }

    req.userId=decoded.id;
    next();
}

module.exports={
    userAuth:userAuth
};