const User = require("../models/user");
const List = require("../models/list");
const Item = require("../models/item");
const ListItem = require("../models/listItem");

exports.postCreateList = (req, res) => {
  //CreateList
  req.user.createList({ title: req.body.listTitle }).then((list) => {
    console.log(list);
    let params = {};
    params.user = req.user;
    res.redirect("/home");
  }).catch(err => {
    console.log(err);
  });
};
exports.postCreateItem = (req, res) => {
  //Find List
  //Add Item
};
exports.postAddItem = async (req, res) => {
  console.log(req.body);
  let listId = req.body.listId;
  let newListItem = req.body.itemName;
  let item;
  try {
    if (req.body.itemId != null) {
      item = await findOrCreateItem(req.body.itemId, true);
    } else {
      item = await findOrCreateItem(newListItem, false);
    }

    let oldLists = await req.user.getLists({
      where: { id: listId },
      through: { Item },
    });
    logLabel("OLD LISTS", oldLists);
    let oldItems = await oldLists[0].getItems();
    logLabel("OLD ITEMS", oldItems);
    let count = 1;
    if (oldItems.length > 0) {
      let oldItem = await oldItems.find((item) => item.id == item.id);
      count = oldItem.listItem.count + 1;
    }
    await oldLists[0].addItem(item, { through: { count: count } });
    res.redirect("/home");
  } catch (error) {
    console.log(error);
  }

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

const findOrCreateItem = async (itemKey, isPk) => {
  let item = null;
  itemKey;
  if (isPk) {
    item = await Item.findByPk(itemKey);
  } else {
    item = await Item.findOne({ where: { name: itemKey } });
  }

  if (item == null) {
    item = await Item.create({
      name: itemKey,
    });

    return item;
  } else return item;
};

const logLabel = (message, data) => {
  console.log("***************************");
  console.log(message);
  console.log("***************************");
  console.log(data);
  console.log("***************************");
};
