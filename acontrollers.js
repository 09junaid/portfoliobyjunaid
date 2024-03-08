const User = require("./models/user-model")
const bcrypt = require("bcryptjs")
//todo------------Home Page--------s-----//
const home = async (req, res) => {
    try {
        res.status(200).send("WELCOME TO HOME PAGE")

    } catch (error) {
        console.log(error)
    }
}
//todo-------------Register page-----------------//
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body
        const Exituser = await User.findOne({ email });
        if (Exituser) {
            return res.status(400).json({ msg: "email already exist" })
        }
        //--------Hashing the password
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds)
        const hash_password = await bcrypt.hash(password, salt);
        //--------------------------------------------------------End Hash
        const createuser = await User.create({
            username,
            email,
            phone,
            password: hash_password
        });
        console.log(createuser)
        res.status(201).json({
             msg:"Registration successfull",
             token:await createuser.generateToken(),
             userId:createuser._id.toString()});

    } catch (error) {
        res.status(500).json("Internel server error")
      
    }
}

    //*---------------Login Registration form------------------*//
        const login = async(req,res)=>{
            try{
            const {email,password}=req.body
            const loginuser=await User.findOne({email});
            console.log(loginuser);
            if(!loginuser){
                return res.status(400).json({msg:"Invalid Credential"})
            }
            const user=await bcrypt.compare(password,loginuser.password)
            if(user){
                res.status(200).json({
                    msg:"Login Successfully",
                    token:await loginuser.generateToken(),
                    userId:loginuser._id.toString()});
            }
            else{
                res.status(401).json({msg:"Invalid email or Password"})
            }
            }catch(error){
                res.status(500).json({msg:"Internel Server Error"})
            }
        }

         //*___________________ user Logic ____________________*//

        //  const users=async(req,res)=>{
        //     try {
        //         const userData=req.user
        //         console.log(userData)
        //         return  res.status(200).json({userData});
        //     } catch (error) {
        //         console.log(`error from the user route ${error}`);
        //     }
        //  };
      

module.exports = {home, register,login,};//users