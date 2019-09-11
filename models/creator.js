const mongoose = require("../db/connection");

const creatorSchema = new mongoose.Schema ({
    id: Number,
    fullName: String,
    characters: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Character" 
    },
    Series: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Series" 
    }
});

const Creator = mongoose.model("Creator", creatorSchema);

module.exports = Creator;