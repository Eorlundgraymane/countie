exports.getLandingPage = (req, res,next) => {
  if (!req.session.isAuth) {
    let params = {};
    params.pageTitle = "Countie";
    params.errorMessage = req.session.errorMessage;
    params.userInfoMessage = req.session.userInfoMessage;
    req.session.errorMessage = null;
    req.session.userInfoMessage = null;
    res.render("landing.ejs", params);
  } else {
    res.redirect("/home");
  }
};

exports.getSignUpPage = (req, res) => {
  if (!req.session.isAuth) {
    let params = {};
    params.pageTitle = "Countie-SignUp";
    params.errorMessage = req.session.errorMessage;
    params.userInfoMessage = req.session.userInfoMessage;
    req.session.errorMessage = null;
    req.session.userInfoMessage = null;
    res.render("signup.ejs", params);
  } else {
    res.redirect("/home");
  }
};
