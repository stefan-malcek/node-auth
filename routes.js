const path = require('path');

const express = require('express');

const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getIndex);

router.get('/login', controller.getLogin);

router.post('/login', controller.postLogin);

router.get('/logout', controller.getLogout);

module.exports = router;
