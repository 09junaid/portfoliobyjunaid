const mongoose=require("mongoose")
const URI=process.env.MONGODB_URI;
const Connectdb=async()=>{
try{
await mongoose.connect(URI)
console.log("The connection has been successfully to DB 👍👍-------")
}catch(error){
console.log("Connection Interrupt")
process.exit(0);
}
}
module.exports=Connectdb