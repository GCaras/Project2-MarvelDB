const express = require("express");
const router = express.Router();

router.use("/", require("./application.js"));
router.use("/api/series", require("./series"));
router.use("/api/characters", require("./character"));
router.use("/api/creators", require("./creator"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;