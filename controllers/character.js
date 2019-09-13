const Character = require("../models/characters");

module.exports = {
    index: (req, res) => {
        Character.find({}).then(characters => {
            res.json(characters);
        })
    },
    show: (req, res) => {
        Character.findOne({
            name: req.params.name
        }).then(
            character => {
                console.log(req.params.name)
                res.json(character);
            }
        )
    },
    create: (req, res) => {
        const newCharacter = req.body;
        Character.create(newCharacter).then(character => res.json(character));
    },
    update: (req, res) => {
        const updatedCharacter = req.body;
        Character.findOneAndUpdate({
            id: req.params.id
        }, updatedCharacter, {
            new: true
        }).then(character => {
            res.json(character);
        });
    },
    destroy: (req, res) => {
        Character.findOneAndDelete({
            id: req.params.id
        }).then(character => {
            res.json(character);
        })
    }
};