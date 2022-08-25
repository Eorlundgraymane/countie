exports.getLandingPage = (req, res) => {
  let params = {};
  params.pageTitle = "Countie";
  params.errorMessage = req.session.errorMessage;
  params.userInfoMessage = req.session.userInfoMessage;
  req.session.errorMessage = null;
  req.session.userInfoMessage = null;
  res.render("landing.ejs", params);
};

exports.getSignUpPage = (req, res) => {
  let params = {};
  params.pageTitle = "Countie-SignUp";
  params.errorMessage = req.session.errorMessage;
  params.userInfoMessage = req.session.userInfoMessage;
  req.session.errorMessage = null;
  req.session.userInfoMessage = null;
  res.render("signup.ejs", params);
};
