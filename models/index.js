const User = require('./User');
const Weekday = require('./Weekday');
const Day = require('./Day');
const Week = require('./Week');
const FutureToDo = require('./FutureToDo');

User.hasMany(Weekday, {
    foreignkey: 'user_id',
    onDelete: 'CASCADE',
});
User has many weeks

Weekday.belongsTo(User, {
    foreignkey: 'user_id',
});
weeks belong to users

Weekday.hasMany(Day, {
    foreignkey: 'day_id',
    onDelete: "CASCADE",
});
Weeks have many Days

Day.belongsTo(Week, {
    foreignkey: 'user_id',
});
Days belong to weeks

User.hasMany(Day, {
    foreignkey: 'user_id',
    onDelete: "CASCADE",
});
Users have many days

User.hasMany(FutureToDo, {
    foreignkey: "user_id",
    onDelete: "CASCADE",
});
Users have futureToDo

FutureToDo.belongsTo(User, {
    foreignkey: "user_id",
});
futureToDo belongs to User

Weekday.belongsTo(Day, {
    foreignkey: 'user_id',
});
weekday belongs to day




Day.init(
    id,
    toDoText,
    date,
    priority,
    day_id foreignkey to weekday id
    user_id
)

weekday {
    id:
    dayname:
}

Week.init(
    id
    date,
    days
)

futureToDo.init(
    id,
    user_id,
    content
)

module.exports = {
    Weekday,
    Week,
    Day,
    FutureToDo,
    User
}