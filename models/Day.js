const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Day extends Model {}

Day.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    toDoText: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    day_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "weekday",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = Day;
