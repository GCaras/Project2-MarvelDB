const Creator = require("../models/creator");

module.exports = {
    index: (req, res) => {
        Creator.find({}).then(creators => {
            res.json(creators);
        })
    },
    show: (req, res) => {
        Creator.findOne({
            name: req.params.name
        }).then(
            creator => {
                console.log(req.params.name)
                res.json(creator);
            }
        )
    },
    create: (req, res) => {
        const newCreator = req.body;
        Creator.create(newCreator).then(creator => res.json(creator));
    },
    update: (req, res) => {
        const updatedCreator = req.body;
        Creator.findOneAndUpdate({
            id: req.params.id
        }, updatedCreator, {
            new: true
        }).then(creator => {
            res.json(creator);
        });
    },
    destroy: (req, res) => {
        Creator.findOneAndDelete({
            id: req.params.id
        }).then(creator => {
            res.json(creator);
        })
    }
};