const express = require("express");
const router = express.Router();
const folder = require("../controllers/folderController.js");

router.post("/create", folder);

module.exports = router;
