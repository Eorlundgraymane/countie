const User = require("../models/user");
const List = require("../models/list");
const Item = require("../models/item");
const ListItem = require("../models/list-item");

exports.postCreateList = (req, res) => {
  //CreateList
  User.findByPk(req.session.user.id).then((user) => {
    user.createList({ title: req.body.listTitle }).then((list) => {
      console.log(list);
      res.redirect("/home");
    });
  });
};
exports.postCreateItem = (req, res) => {
  //Find List
  //Add Item
};
exports.postAddItem = (req, res) => {
  console.log(req.body);
  User.findByPk(req.session.user.id, {
    include: {
      model: List,
      as: "lists",
      include: { model: ListItem, as: "items" },
    },
  }).then((user) => {
    console.log("User Lists");
    console.log(user.lists);
    res.redirect("/home");
  });
  //Find List
  //Find Item
  //Add Count
};
exports.postReduceItem = (req, res) => {
  //Find List
  //Find Item
  //Reduce Count
};
exports.postDeleteItem = (req, res) => {
  //Find List
  //Find Item
  //Delete Item
};
