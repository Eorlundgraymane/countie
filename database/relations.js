const User = require("../models/user");
const List = require("../models/list");
const Item = require("../models/item");
const ListItem = require("../models/list-item");

User.hasMany(List,{as: 'lists'});
List.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
List.hasMany(ListItem, {as: 'items'})
ListItem.belongsTo(List, { constraints: true, onDelete: "CASCADE" });
Item.belongsToMany(List, { through: ListItem });

module.exports = this;
