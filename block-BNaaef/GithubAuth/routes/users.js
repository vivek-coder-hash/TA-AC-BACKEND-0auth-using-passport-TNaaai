var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.session , req.user)  // req.session include key of passport , req.user is that user which authenticate via github
  res.send('respond with a resource');
});

module.exports = router;
