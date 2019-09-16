const mongoose = require("../db/connection");

const characterSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String
})

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;