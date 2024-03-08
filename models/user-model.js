const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")

//todo--------User Schema---------?//

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

//*------JWT JSON WEB TOKEN--------
userSchema.methods.generateToken=async function(){
try{
return jwt.sign({
    userId:this._id.toString(),
    email:this.email,
    isAdmin:this.isAdmin
},
await process.env.JWT_SECRET_KEY,{
    expiresIn:"2d"
})
}catch(error){
     console.error(error)
};
}
//*-------------END------------------------------
//todo--------Collection-----------//

const User=new mongoose.model("User",userSchema);
module.exports=User


// {
//     "username":"Junaid Arshad",
//     "email":"junaid@email.com",
//     "phone":123456789,
//     "password":"junaid"
// }