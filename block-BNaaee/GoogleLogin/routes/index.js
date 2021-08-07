var express = require('express');
var router = express.Router();
var passport = require("passport")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/success" , (req,res)=> {
  res.render("success.ejs")
})

router.get("/fail" , (req,res)=> {
  res.render("fail.ejs")
})

//passport google route

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/failure' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  }
);

module.exports = router;
