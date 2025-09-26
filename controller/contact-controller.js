 const Contact = require("../models/contact-model");

 const contactForm = async(req, res) =>{
    try {
        
        const reponse = req.body;
        await Contact.create(reponse);
        return res.status(200).json({messsage: "Message send successfully!"});
    } catch (error) {
        return res.status(500).json({messsage: "Message not delivered!"});
    }
 }

 module.exports = contactForm;