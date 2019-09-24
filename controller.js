exports.getIndex = (req, res, next) => {
  res.render('shop/index', {
    pageTitle: 'Shop',
    path: '/'
  });
};

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login'
  });
};

exports.postLogin = (req, res, next) => {
  //httpOnly=True; Max-Age=10; secure=True Expires=<Date format>
  res.setHeader('Set-Cookie', 'loggedIn=True');
  res.redirect('/');
};

exports.getLogout = (req, res, next) => {
  res.clearCookie('loggedIn');
  res.redirect('/');
};

exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '/404'
  });
};
