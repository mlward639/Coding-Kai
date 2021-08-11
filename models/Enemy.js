const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
class Enemy extends Model {}

Enemy.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // TODO: add level
    // TODO: add enemy position (x,y)? 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'enemy',
  }
);

module.exports = Enemy;
