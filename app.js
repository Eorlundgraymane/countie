const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const bodyParser = require("body-parser");
const rootDir = require("./utils/path");
const path = require("path");
const ejs = require("ejs");
const app = express();
const port = process.env.PORT || 3000;
const database = require("./database/database");
const relations = require("./database/relations");
const mainRouter = require("./routers/mainRouter");
const User = require("./models/user");

app.set("view-engine", ejs);
app.set("views", "views");
const sequelizeDB = new SequelizeStore({
  db: database,
});
app.use(
  session({
    secret: "CountieSecret",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    store: sequelizeDB,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/", (req, res,next) => {
  if (req.session.isAuth) {
    User.findByPk(req.session.user.id).then((user) => {
      req.user = user;
      next();
    });
  }
  else {
    next();
  }
});

app.use(mainRouter);
sequelizeDB
  // .sync({ force: true })
  .sync()
  .then((seqResult) => {
    console.log(seqResult);
    // database.sync({ force: true }).then(
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
  })
  .catch((err) => console.log(err));
