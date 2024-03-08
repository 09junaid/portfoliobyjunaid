require('dotenv').config();
const express = require("express");
const cors=require("cors");
const router = require("./auth");
const conrouter=require("./contactrouter")
const app = express();
const Connectdb=require("./utils/db")
//---------Lets the server ports-------
var corsOption={
    origin:"http://localhost:5173",
    methods:"GET,POST,DELETE,PUT,PATCH,HEAD",
    Credential:true
};
app.use(cors(corsOption));
const PORT = 5000
app.use(express.json())
app.get("/", router)
app.post("/register", router)
app.post("/login",router)
// app.get("/users",router)
app.post("/contacts",conrouter)
Connectdb().then(()=>{
app.listen(PORT, () => {
    console.log(`The server is running on the port::-${PORT}`)
})
})