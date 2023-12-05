const sequelize = require("../config/connection");
const {
  User,
  Week,
  Weekday,
  Day,
  Motivator,
  Future,
  Task,
  Priority,
} = require("../models");

const userData = require("./userData.json");
const weekData = require("./weekData.json");
const weekdayData = require("./weekdayData.json");
const calendarData = require("./calendarData.json");
const motiveData = require("./motiveData.json");
const futureData = require("./futureData.json");
const taskData = require("./taskData.json");
const priorityData = require("./priorityData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, { individualHooks: true, returning: true });
  await Week.bulkCreate(weekData);
  await Weekday.bulkCreate(weekdayData);
  await Day.bulkCreate(calendarData);
  await Motivator.bulkCreate(motiveData);
  await Future.bulkCreate(futureData);
  await Task.bulkCreate(taskData);
  await Priority.bulkCreate(priorityData);

  process.exit(0);
};

seedDatabase();
