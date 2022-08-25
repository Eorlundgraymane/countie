exports.get404Page = (req, res) => {
  let params = {};
  params.pageTitle = "404-Page Not Found";
  res.status(404).render("404.ejs", params);
};
