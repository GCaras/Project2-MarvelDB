const mongoose = require("../db/connection");



const characterSchema = new mongoose.Schema ({
    id: Number,
    name: String,
    description: String,
    series: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Series"   
    }
})

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;