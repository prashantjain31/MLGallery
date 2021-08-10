const express = require('express');
const spamHamRouter = express.Router();

// Import Controllers
const spamHamController = require("../controllers/spamHamController")

spamHamRouter.route("/")
.post(spamHamController.spamHamClassifier)

module.exports = spamHamRouter;