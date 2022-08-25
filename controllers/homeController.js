exports.getHomePage = (req, res) => {
    if (req.session.isAuth) {
        let params = {};
        params.pageTitle = "Countie-Home";
        params.user = req.session.user;
        res.render("home.ejs", params);  
    }
    else {
        req.session.errorMessage = "You are not Logged In!";
        res.redirect("/")
    }
};
