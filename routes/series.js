const express = require("express");
const router = express.Router();
const seriesController = require("../controllers/series");

router.get("/", seriesController.index);

router.get("/show/:name", seriesController.show);

router.post("/create/", seriesController.create);

router.put("/update/:id", seriesController.update);

router.delete("/delete/:id", seriesController.destroy);

module.exports = router;