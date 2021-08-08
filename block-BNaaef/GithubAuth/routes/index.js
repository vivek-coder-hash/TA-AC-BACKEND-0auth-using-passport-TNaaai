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

router.get('/auth/github',
  passport.authenticate('github')); //from this route we'll make request to github server  // when we hit login with github , request will come to this line and it will look for strategy in /modules/passport.js


router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect:'/fail' ,  session:false}),  // session:false will do =>  passport will not look for session now 
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });  // In this route github will return us fail or success


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

  router.get('/logout', (req, res)=> {
    req.session.destroy()
    res.clearCookie();
    res.redirect('/')
  })


module.exports = router;
