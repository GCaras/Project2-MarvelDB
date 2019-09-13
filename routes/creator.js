const express = require("express");
const router = express.Router();
const creatorController = require("../controllers/creator");

router.get("/", creatorController.index);

router.get("/show/:name", creatorController.show);

router.post("/create/", creatorController.create);

router.put("/update/:id", creatorController.update);

router.delete("/delete/:id", creatorController.destroy);

module.exports = router;