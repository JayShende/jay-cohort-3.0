const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=Schema.ObjectId;

const UserSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstname:String,
    lastname:String
});

const AdminSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstname:String,
    lastname:String

});

const CourseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imagUrl:String,
    creatorId:ObjectId
});

const purchaseSchema=new Schema({
    courseId:ObjectId,
    userId:ObjectId
});

const userModel=mongoose.model("users",UserSchema);
const adminModel=mongoose.model("admin",AdminSchema);
const courseModel=mongoose.model("course",CourseSchema);
const purchaseModel=mongoose.model("purchase",purchaseSchema);


module.exports={
    userModel:userModel,
    adminModel:adminModel,
    courseModel:courseModel,
    purchaseModel:purchaseModel
};