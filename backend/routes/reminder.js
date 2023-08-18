
var express = require("express");
var router = express.Router();
const User = require("../models/User");
const userController = require("../controller/user.controller");
const Reminder = require("../models/Reminder");
const reminderController = require("../controller/reminder.controller");

router.post("/create", reminderController.createReminder)
router.get("/get", reminderController.getReminders)
router.get("/get/:id", reminderController.getReminderByUserId)
router.put("/update/:id", reminderController.updateReminder)
router.delete("/delete/:id", reminderController.deleteReminder)


module.exports = router;
