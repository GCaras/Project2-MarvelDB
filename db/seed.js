//model references
const Series = require("../models/series");
const Character = require("../models/characters");
const Creator = require("../models/creator");

//json references
const seriesJsonData = require("./data/seriesData.json");
const characterJsonData = require("./data/characterData.json");
const creatorJsonData = require("./data/creatorData.json");

//series seed model
const seriesJsonDataResults = seriesJsonData.data.results;
const seriesSeedData = seriesJsonDataResults.map(seriesJson => {
  const seriesData = {};
  seriesData.id = seriesJson["id"];
  seriesData.title = seriesJson["title"];
  seriesData.description = seriesJson["description"];
  seriesData.startYear = seriesJson["startYear"];
  seriesData.endYear = seriesJson["endYear"];
  return seriesData;
});

//character seed model
const charJsonDataResults = characterJsonData.data.results;
const characterSeedData = charJsonDataResults.map(characterJson => {
  const characterData = {};
  characterData.id = characterJson["id"];
  characterData.name = characterJson["name"];
  characterData.description = characterJson["description"];
  return characterData;
});

//creator seed model
const creatorJsonDataResults = creatorJsonData.data.results;
const creatorSeedData = creatorJsonDataResults.map(creatorJson => {
  const creatorData = {};
  creatorData.id = creatorJson["id"];
  creatorData.fullName = creatorJson["fullName"];
  return creatorData;
});

//series DB clear and populate function
Series.deleteMany({})
.then(() => {
  Series.create(seriesSeedData)
    .then(series => console.log(series))
    .catch(err => console.log(err));
})
.catch(err => console.log(err));

//creator DB clear and populate function
Character.deleteMany({})
  .then(() => {
    Character.create(characterSeedData)
      .then(character => console.log(character))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));

//creator DB clear and populate function
Creator.deleteMany({})
.then(() => {
  Creator.create(creatorSeedData)
    .then(creator => console.log(creator))
    .catch(err => console.log(err));
})
.catch(err => console.log(err));
