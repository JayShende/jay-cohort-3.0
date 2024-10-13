const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const ObjectId=Schema.ObjectId;

const User=new Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
});

const Todo=new Schema({
    UserId:ObjectId,
    title:String,
    done:Boolean
})


// mongoose.model(model_name_in_db,Schema_name);

const UserModel=mongoose.model("users",User);
const TodosModel=mongoose.model("todos",Todo);

module.exports={
    UserModel:UserModel,
    TodosModel:TodosModel
};