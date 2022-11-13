var express = require("express");
var router = express.Router();

const WildFireDataController = require('../controller/WildFireDataController');


router.get('/wildfires/ended', WildFireDataController.getWildFireDataEndedForMonthAndYear);

module.exports = router;