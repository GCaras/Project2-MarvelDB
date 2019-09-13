const Series = require("../models/series");

module.exports = {
    index: (req, res) => {
        Series.find({}).populate("creators", {fullName: 1, _id: 0}).then(series => {
            res.json(series);
        })
    },
    show: (req, res) => {
        Series.findOne({
            name: req.params.name
        }).populate("creators", "fullName").then(
            series => {
                console.log(req.params.name)
                res.json(series);
            }
        )
    },
    create: (req, res) => {
        const newSeries = req.body;
        Series.create(newSeries).then(series => res.json(series));
    },
    update: (req, res) => {
        const updatedSeries = req.body;
        Series.findOneAndUpdate({
            id: req.params.id
        }, updatedSeries, {
            new: true
        }).then(series => {
            res.json(series);
        });
    },
    destroy: (req, res) => {
        Series.findOneAndDelete({
            id: req.params.id
        }).then(series => {
            res.json(series);
        })
    }
};