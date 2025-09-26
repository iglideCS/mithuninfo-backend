const  express = require("express");

const achievements = require("../controller/achievement-controller");

const router = express.Router();

router.route("/achievement").get(achievements); 

module.exports = router;