const User = require("../models/user-model");
const Contact = require("../models/contact-model");

const getAllAdminsData = async (req, res, next) => {
    try {
        const users = await User.find({ isAdmin: true }, { password: 0 });

        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Admin Found" });
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
        console.log(error);
    }
};

const getAllUsersData = async (req, res, next) => {
    try {
        const users = await User.find({ isAdmin: false }, { password: 0 });
        
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users Exist" });
        }

        return res.status(200).json(users);
    } catch (error) {
        next(error);
        console.log(error);
    }
};

const getAllContactsData = async (req, res, next) => {
    try {
        const contacts = await Contact.find();

        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts Exist" });
        }

        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
        console.log(error);
    }
};

const getDeleteAdminsById = async (req, res, next) => {
    try {
        const id = req.params.id;

        await User.deleteOne({ _id: id });

        return res.status(200).json({ message: "Admin access revoked" });
    } catch (error) {
        next(error);
    }
};

const getDeleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;

        await User.deleteOne({ _id: id });

        return res.status(200).json({ message: "User deleted successfully!" });
    } catch (error) {
        next(error);
    }
};

const getDeleteContactsById = async (req, res, next) => {
    try {
        const id = req.params.id;

        await Contact.deleteOne({ _id: id });

        return res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { 
    getAllAdminsData, 
    getAllUsersData, 
    getAllContactsData, 
    getDeleteUserById, 
    getDeleteContactsById, 
    getDeleteAdminsById 
};
