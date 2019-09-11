const mongoose = require("../db/connection");

const seriesSchema = new mongoose.Schema ({
    id: Number,
    name: String,
    characters: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Character" 
    },
    startYear: Number,

})

const Series = mongoose.model("Series", seriesSchema);

module.exports = Series;
