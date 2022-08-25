const User = require("../models/user");

exports.postLoginUser = (req, res,next) => {
  User.findOne({
    where: { username: req.body.username, password: req.body.password },
  })
    .then((user) => {
      if (user) {
        console.log("Logged In as "+user.username);
        req.session.isAuth = true;
        req.session.user = user;        
        res.redirect("/home");
      } else {
        req.session.errorMessage = "Username or Password Incorrect";
        console.log("Username or Password Incorrect");
        res.status(401).redirect("/");
      }
    })
    .catch((err) => {
      //   console.log(err);
      req.session.errorMessage = "Username or Password Incorrect";
      console.log("Username or Password Incorrect");
      res.status(401).redirect("/");
    });
  //findUser()
  //loginUser()
};

exports.getLogoutUser = (req, res) => {
  //findUser()
  if (req.session.isAuth) {
    req.session.isAuth = false;
    req.session.user = null;
    req.session.userInfoMessage = "Logged Out Successfully";
    res.redirect("/");
  } else {
    req.session.errorMessage = "You are not Logged In!";
    res.redirect("/");
  }
  //logoutUser()
};

exports.postSignupUser = (req, res) => {
  if (req.body.password == req.body.confirmpassword) {
    //findUser()
    User.findOne({
      where: { $or: [{ username: req.username }, { email: req.email }] },
    })
      .then((user) => {
        console.log(user);
        console.log("Username/Email already exists!");
        req.session.errorMessage = "Username/Email already exists";
        res.redirect("/");
      })
      .catch((err) => {
        console.log("Username and Email Available to Register.");
        //RegisterUser()
        User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        }).then((result) => {
          if (result) {
            console.log(result);
            console.log("User Registered Successfully.");
            req.session.userInfoMessage = "User Registered Successfully.";
            res.redirect("/");
          } else {
            req.session.errorMessage = "Failed to Register User";
            res.redirect("/signup");
          }
        });
      });
  } else {
    req.session.errorMessage = "Passwords Do Not Match";
    res.redirect("/signup");
  }
};
