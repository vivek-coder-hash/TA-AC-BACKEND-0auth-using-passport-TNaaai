var passport  = require("passport")
var User = require("../models/User")

var GoogleStrategy = require('passport-google-oauth20').Strategy;

//google strategy


passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      function (accessToken, refreshToken, profile, done) {
        console.log(profile);
  
      /*  let userData = {
          name: profile._json.given_name + ' ' + profile._json.family_name,
          userName: profile._json.name,
          email: profile._json.sub,
          image: profile._json.picture,
        };
        console.log('google userdata', userData);
  
        User.findOne({ email: profile._json.sub }, (err, user) => {
          if (err) return done(err);
  
          if (!user) {
            User.create(userData, (err, created) => {
              if (err) return done(err);
              console.log('google user created', created);
              return done(null, created);
            });
          }
          done(null, user);
        });  */
      }
      
    )
  );
  
  