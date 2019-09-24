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
  req.session.isLoggedIn = true;
  req.session.user = req.body.user;
  res.redirect('/');
};

exports.getLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not Found',
    path: '/404'
  });
};
