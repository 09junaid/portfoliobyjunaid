// const jwt=require("jsonwebtoken")
// const User=require("../models/user-model")
// const authMiddleware=async(req,res,next)=>{ //* In middleware we can use third parameter like "next()" *//
  
//         const token=req.headers("authorization");
//         if(!token){
//         return res.status(401).json({msg:"Unathorization HTTP,Token not provide"});

//         }
//         const jwttoken=token.replace("Bearer","").trim();
//         console.log("token from auth middleware",jwttoken);
       
//    try {
//     const isVerified=jwt.verify(jwttoken,process.env.JWT_SECRET_KEY)
//     const userData=await User.findOne({email:isVerified.email}).
//     select({
//         password:0,
//     })
//     console.log(userData);

//     //*______________this is custome properties, if we will use middleware then we use custome properties___________*//
//     req.user=userData;
//     req.token=token;
//     req.userID=userData._id
//     next();
//    } catch (error) {
//     return res.status(401).json({msg:"Unathorization. Invalid token"});

//    }
// };
// module.exports=authMiddleware;