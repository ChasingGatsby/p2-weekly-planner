const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Task extends Model {}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    day_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "day",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "task",
  }
);

module.exports = Task;
