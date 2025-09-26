const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


const home = async (req, res) =>{
    try {
        res.status(200).send("Home page from controller");
    } catch (error) {
        console.log(error)
    }
}

const register = async (req, res) =>{
    try {
        // console.log(req.body);

        const {username, email, password} = req.body;

        const userExists = await User.findOne({ email });

        if(userExists){
            return res.status(400).json({ message:"Email already exists!" })
        }

        const userCreated = await User.create({ 
            username, 
            email, 
            password 
        });
        
        res.status(201).json({ 
            msg: "Registration Successful!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
         });

    } catch (error) {
        // res.status(400).json("page not found");
        next(error);
    }
};

//Login logic

const login = async (req,res) =>{
    try {
        
        const{email, password} = req.body;

        const userExists = await User.findOne({ email })

        if(!userExists){
            return res.status(400).json({
                message:"Invalid Credentials"
            });
        }

        //comparing password

        // const isPasswordVaild = await bcrypt.compare(password, userExists.password);
        
        const isPasswordVaild = await userExists.comparePassword(password);

        if(isPasswordVaild){
            res.status(201).json({ 
                msg: "Login Successful!",
                token: await userExists.generateToken(),
                userId: userExists._id.toString(),
             });
        }else{
            res.status(401 ).json({message: "Invalid Credentials"})
        }

    } catch (error) {
        res.status(500).json("Internal Server Error");
    }
}


//user logic here sending user data


const user = async (req, res) =>{
    try {
        
        const userData = req.user;

        // console.log(userData);
        
        return res.status(200).json({userData});

    } catch (error) {
        console.log(`error from user route ${error}`);
        
    }
}

module.exports = {home, register, login, user}