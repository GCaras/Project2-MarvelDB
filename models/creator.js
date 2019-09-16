const mongoose = require("../db/connection");

const creatorSchema = new mongoose.Schema({
    id: Number,
    fullName: String
});

const Creator = mongoose.model("Creator", creatorSchema);

module.exports = Creator;