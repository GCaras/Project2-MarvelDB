const mongoose = require("../db/connection");

const creatorSchema = new mongoose.Schema({
    id: Number,
    fullName: String,
    Series: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Series"
    }
});

const Creator = mongoose.model("Creator", creatorSchema);

module.exports = Creator;