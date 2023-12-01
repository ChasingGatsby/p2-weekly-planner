const sequelize = require("../config/connection");
const { Week, Weekday } = require("../models");

const weekData = require("./weekData.json");
const weekdayData = require("./weekdayData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await Week.bulkCreate(weekData);
  await Weekday.bulkCreate(weekdayData);
  process.exit(0);
};
