const Sequelize = require("sequelize");
const database = require("../database/database");

const List = database.define("list", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
});

module.exports = List;
