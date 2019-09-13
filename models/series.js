const mongoose = require("../db/connection");

const seriesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    startYear: Number,
    endYear: Number,
    creators: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Creator"
    }],
});

const Series = mongoose.model("Series", seriesSchema);

module.exports = Series;