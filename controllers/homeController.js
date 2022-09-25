const Item = require("../models/item");
const List = require("../models/list");
const ListItem = require("../models/listItem");
const User = require("../models/user");

exports.getHomePage = (req, res, next) => {
  if (req.session.isAuth) {
    var params = {};
    params.pageTitle = "Counterie - Home";
    User.findByPk(req.session.user.id, {
      include: [{ all: true, nested: true }],
    })
      .then((user) => {
        console.log(user);
        console.log(user.lists);
        user.lists.forEach((list) => {
          console.log(list.items);
          console.log("********************************");
          list.items.forEach((item) => {
            console.log(item);
            console.log("COUNT IS ");
            console.log(item.listItem.count);
          });
          console.log("********************************");
        });
        params.user = user;
        res.render("home.ejs", params);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    req.session.errorMessage = "You are not Logged In!";
    res.redirect("/");
  }
};
