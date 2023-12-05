const User = require("./User");
const Weekday = require("./Weekday");
const Day = require("./Day");
const Week = require("./Week");
const Future = require("./Future");
const Task = require("./Task");
const Priority = require("./Priority");

Weekday.hasMany(Day, {
  foreignKey: "day_id",
  onDelete: "CASCADE",
});

Day.belongsTo(Weekday, {
  foreignKey: "day_id",
});

Week.hasMany(Day, {
  foreignKey: "week_id",
  onDelete: "CASCADE",
});

Day.belongsTo(Week, {
  foreignKey: "week_id",
});

User.hasMany(Future, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Future.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Task, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Task.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Priority, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Priority.belongsTo(User, {
  foreignKey: "user_id",
});

Day.hasMany(Task, {
  foreignKey: "day_id",
  onDelete: "CASCADE",
});

Task.belongsTo(Day, {
  foreignKey: "day_id",
});

Day.hasMany(Priority, {
  foreignKey: "day_id",
  onDelete: "CASCADE",
});

Priority.belongsTo(Day, {
  foreignKey: "day_id",
});

module.exports = {
  Weekday,
  Week,
  Day,
  Future,
  User,
  Task,
};
