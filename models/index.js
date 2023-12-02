const User = require("./User");
const Weekday = require("./Weekday");
const Day = require("./Day");
const Week = require("./Week");
const FutureToDo = require("./FutureToDo");

User.hasMany(Weekday, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

Weekday.belongsTo(User, {
  foreignkey: "user_id",
});

Weekday.hasMany(Day, {
  foreignkey: "day_id",
  onDelete: "CASCADE",
});

Day.belongsTo(Week, {
  foreignkey: "user_id",
});

User.hasMany(Day, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(FutureToDo, {
  foreignkey: "user_id",
  onDelete: "CASCADE",
});

FutureToDo.belongsTo(User, {
  foreignkey: "user_id",
});

Weekday.belongsTo(Day, {
  foreignkey: "user_id",
});

module.exports = {
  Weekday,
  Week,
  Day,
  FutureToDo,
  User,
};
