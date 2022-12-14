const Sequelize = require("sequelize");
const database = require("../database/database");

const List = database.define("list", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING    
  }
});

module.exports = List;
