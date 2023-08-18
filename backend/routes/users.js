var express = require("express");
var router = express.Router();
const User = require("../models/User");
const userController = require("../controller/user.controller");

router.post("/login", userController.login);
router.post("/register", userController.register);

module.exports = router;
