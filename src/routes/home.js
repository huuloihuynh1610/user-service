var express = require('express');
var router = express.Router();
const isAdmin = require('~middleware/isAdmin')

/* GET users listing. */
router.get('/home', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
