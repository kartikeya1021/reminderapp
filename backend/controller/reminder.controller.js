//reminder controller

const Reminder = require("../models/Reminder");
const User = require("../models/User");

exports.createReminder = async (req, res) => {
  const { title, description, date, user } = req.body;
  const newReminder = new Reminder({
    title,
    description,
    date,
    user,
  });
  const savedReminder = await newReminder.save();
  if (savedReminder) {
    return res.status(200).send(savedReminder);
  }
  return res.status(500).send("Something went wrong");
};

exports.getReminders = async (req, res) => {
  const reminders = await Reminder.find();
  if (reminders) {
    return res.status(200).send(reminders);
  }
  return res.status(500).send("Something went wrong");
};

exports.getReminderByUserId = async (req, res) => {
  const { id } = req.params;
  const reminders = await Reminder.find({ user: id });
  if (reminders) {
    return res.status(200).send(reminders);
  }
  return res.status(500).send("Something went wrong");
};

exports.updateReminder = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, status } = req.body;
  const reminder = await Reminder.findByIdAndUpdate(
    id,
    {
      title,
      description,
      date,
      isActivated: status,
    },
    { new: true }
  );
  if (reminder) {
    return res.status(200).send(reminder);
  }

  return res.status(500).send("Something went wrong");
};

exports.deleteReminder = async (req, res) => {
  const { id } = req.params;
  const reminder = await Reminder.findByIdAndDelete(id);
  if (reminder) {
    return res.status(200).send(reminder);
  }
  return res.status(500).send("Something went wrong");
};
