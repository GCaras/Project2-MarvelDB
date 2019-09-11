const Character = require("../models/characters");
// const Series = require("../models/series");
// const Creator = require("../models/creator");

const characterJsonData = require("./data/characterData.json");
// const seriesJsonData = require("./data/seriesData.json");
// const creatorJsonData = require("./data/creatorData.json");

const characterSeedData = characterJsonData.map(characterJson => {
  const characterData = {};

  characterData.id = characterJson.id;
  characterData.name = characterJson.name;
  characterData.series = characterJson.series;
  characterData.description = characterJson.description;
  characterData.creator = characterJson.creator;
  characterData.startYear = characterJson.startYear;
  characterData.url = characterJson.url;

  return characterData;
});

Character.deleteMany({})
  .then(() => {
    Character.create(characterSeedData)
      .then(character => console.log(character))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
