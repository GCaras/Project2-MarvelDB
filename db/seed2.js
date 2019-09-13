const Series = require("../models/series");
const Creator = require("../models/creator");

const seriesJsonData = require("./data/seriesData.json");
const creatorJsonData = require("./data/creatorData.json");

const seriesJsonDataResults = seriesJsonData.data.results;

Series.find({}).then(seriesDB => {

    seriesDB.forEach(seriesDocument => {
        const seriesJson = seriesJsonDataResults.find(seriesJsonItem => {
            return seriesJsonItem.title === seriesDocument.title
        });
        seriesJson.creators.items.forEach(creatorJson => {
            Creator.findOne({
                    fullName: creatorJson.name
                })
                .then(creatorDocument => {
                    if (creatorDocument === null) {
                        return
                    } else {
                        console.log(creatorDocument);
                        seriesDocument.creators.push(creatorDocument._id)
                        seriesDocument.save()
                    }
                })
        })
    });
});