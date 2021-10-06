const express = require('express');
const { mainFunction} = require('../controller/main.controller');
const router = express.Router();

// Define your API endpoints below

router.get("/hi", mainFunction);

module.exports = router;