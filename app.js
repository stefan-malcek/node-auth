const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controller');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  let isLoggedIn = false;
  const cookie = req.get('Cookie');
  console.log(cookie);
  if (cookie) {
    isLoggedIn =
      req
        .get('Cookie')
        .split(';')[0]
        .trim()
        .split('=')[1] === 'True';
  }
  res.locals.isAuthenticated = isLoggedIn;
  next();
});

app.use(routes);
app.use(controller.get404);

app.listen(3000);
