const User = require("../models/user");
const List = require("../models/list");
const Item = require("../models/item");

User.hasMany(List);
List.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
List.hasMany(Item);

module.exports = this;