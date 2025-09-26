const { Schema, model, default:mongoose} = require("mongoose");

const contactSchema = new Schema({

    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    message:{
        type: String,
        require: true,
    }

});


//creating collection in our data base name "Contact"
const Contact = new model("Contact", contactSchema);

module.exports = Contact;
