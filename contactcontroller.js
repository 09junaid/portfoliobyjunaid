const contact=require("./contactmodel")
const contactForm=async(req,res)=>{
    try {
        const request=(req.body)
        await contact.create(request)
        return res.status(200).json({msg:"The message send successfully"})
    } catch (error) {
        res.status(404).json({msg:"default error"})
    }

}
module.exports={contactForm}