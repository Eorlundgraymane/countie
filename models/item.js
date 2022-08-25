const Sequelize = require("sequelize");
const database = require("../database/database");

const Item = database.define("item", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  itemname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Item;
