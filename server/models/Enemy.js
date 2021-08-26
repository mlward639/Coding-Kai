//MONGOOSE
const { Schema, model } = require('mongoose');

//I believe objectID is autogenerated for each
const EnemySchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is Required',
  },
  hitPoints: {
    type: Number,
    trim: true,
  },
  attack: {
    type: Number,
    trim: true,
  },
});

const Enemy = model('Enemy', EnemySchema);

module.exports = Enemy;

/* SQL
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
*/
