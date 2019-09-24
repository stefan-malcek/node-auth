const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const controller = require('./controller');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({ secret: 'super secret', resave: false, saveUninitialized: false })
);

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.user = req.session.user;
  next();
});

app.use(routes);
app.use(controller.get404);

app.listen(3000);
