const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret blog",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// // Incorporate the custom helper methods
// const hbs = exphbs.create({});

// Set Handlebars as the default template engine.
app.set("view engine", "hbs");
app.engine(".hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: "index",
    
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);


sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
