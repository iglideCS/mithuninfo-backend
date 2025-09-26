const {Schema, model} = require("mongoose");

const achievementSchema = new Schema({

    achievement: { type: String, required: true},

    description: { type: String, required: true},
    
    duration: { type: String, required: true},
    
    provider: { type: String, required: true},
    
    course: { type: String, required: true},
    
    project: { type: String, required: true},

    certificateImage: { type: String, required: true }

});

const Achievement = new model('Achievement', achievementSchema);
module.exports  = Achievement;