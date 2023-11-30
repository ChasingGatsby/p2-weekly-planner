const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Weekday extends Model {}

Weekday.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  day_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
