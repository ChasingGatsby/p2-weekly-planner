const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Day extends Model {}

Day.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weekday_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "weekday",
      key: "id",
    },
  },
  week_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "week",
      key: "id",
    },
  },

  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "day",
});

module.exports = Day;
