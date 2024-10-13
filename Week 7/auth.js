const jwt=require("jsonwebtoken");
const JWT_SECRET="JayShende007@";



function auth(req,res,next)
{
    const token=req.headers.authentication;
    try{
        const response=jwt.verify(token,JWT_SECRET);
        req.userID=response.id;
        next();
    }
    catch(err)
    {
        res.status(403).send({
            message:"Access Denied"
        });
    }
}

module.exports={
    auth:auth,
    // JWT_SECRET:JWT_SECRET
};