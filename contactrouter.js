const express=require("express")
const Routerc=express.Router();
const contactroute=require("./contactcontroller")
Routerc.route('/contacts').post(contactroute.contactForm)
module.exports=Routerc