'use strict';

var express = require('express'),
  controller = require('./catalogue-category.controller'),
  auth = require('../../auth/auth.service');

var router = express.Router();


router.get('/',       auth.isAuthenticated(), auth.canAccessApp(), controller.index);
router.get('/:id',    auth.isAuthenticated(),                      controller.show);
router.post('/',      auth.isAuthenticated(), auth.canAccessApp(), controller.create);
router.put('/:id',   auth.isAuthenticated(), auth.canAccessApp(), controller.update);
router.patch('/:id',  auth.isAuthenticated(), auth.canAccessApp(), controller.update);
router.delete('/:id', auth.isAuthenticated(),                      controller.destroy);

module.exports = router;
