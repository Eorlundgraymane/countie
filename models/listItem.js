const Sequelize = require("sequelize");
const database = require("../database/database");

const ListItem = database.define("listItem", {
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

module.exports = ListItem;
