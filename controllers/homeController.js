const List = require("../models/list");
const ListItem = require("../models/list-item");
const User = require("../models/user");

exports.getHomePage = (req, res, next) => {
  if (req.session.isAuth) {
    User.findByPk(req.session.user.id, {
      include: {
        model: List,
        as: "lists",
        include: { model: ListItem, as: "items" },
      },
    }).then((user) => {
      let params = {};
      params.pageTitle = "Countie-Home";
      params.user = user;
      console.log("Entring Home as " + user.username);
      params.lists = user.lists;
      res.render("home.ejs", params);
    });
  } else {
    req.session.errorMessage = "You are not Logged In!";
    res.redirect("/");
  }
};
