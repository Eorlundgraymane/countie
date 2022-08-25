const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const rootDir = require("./utils/path");
const path = require("path");
const ejs = require("ejs");
const app = express();
const database = require("./database/database");
const relations = require("./database/relations");
const mainRouter = require("./routers/mainRouter");

app.set("view-engine", ejs);
app.set("views", "views");

app.use(session({secret:"CountieSecret",resave:false,saveUninitialized:false,cookie:{maxAge: 1000*60*60*24}}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

const port = process.env.PORT || 3000;

app.use(mainRouter);
//database.sync({force:true}).then(
database.sync().then(
  (result) => {
    console.log(result);
    console.log("DB Connected.");
    app.listen(port);
  },
  (err) => {
    console.log(err);
    console.log("DB Failed");
  }
);
