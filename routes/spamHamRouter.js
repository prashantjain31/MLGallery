const express = require('express');
const spamHamRouter = express.Router();

// Import Controllers
const spamHamController = require("../controllers/spamHamController")

spamHamRouter.route("/")
.get(spamHamController.spamHamClassifier)

module.exports = spamHamRouter;