const mongoose = require("../db/connection");

const characterSchema = new mongoose.Schema ({
    id: Number,
    name: String,
    Series: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Series" 
    },
    description: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Creator" 
    },
    startYear: Number,

})

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;