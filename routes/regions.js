const express = require("express");
const router = express.Router();

const regionsHandler = require("./handler/regions");

router.get("/", regionsHandler.getRegion);
router.post("/", regionsHandler.addRegion);

module.exports = router;
