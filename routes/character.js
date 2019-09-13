const express = require("express");
const router = express.Router();
const characterController = require("../controllers/character");

router.get("/", characterController.index);

router.get("/show/:name", characterController.show);

router.post("/create/", characterController.create);

router.put("/update/:id", characterController.update);

router.delete("/delete/:id", characterController.destroy);

module.exports = router;

