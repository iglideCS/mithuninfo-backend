const Achievement = require("../models/achievement-model");

const achievements = async (req, res) =>{
    
    try {
        
        const response = await Achievement.find();

        if(!response){

            res.status(404).json({msg: 'No Achievement Found'});

            return;
        }

        res.status(200).json({msg: response});
        
    } catch (error) {
        console.log(`achievement: {$error}`);
        
    }
};

module.exports = achievements;