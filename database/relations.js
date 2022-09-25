const User = require("../models/user");
const List = require("../models/list");
const Item = require("../models/item");
const ListItem = require("../models/listItem");

User.hasMany(List);
List.belongsTo(User);
Item.belongsToMany(List, { through: { model: ListItem } });
List.belongsToMany(Item, { through: { model: ListItem } });

module.exports = this;
