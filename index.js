var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

app.use(bodyparser.json());
app.use(session({
 secret:'da illest developer',
resave:'true',
saveunintialized: true   
}));


var FACEBOOK_APP_ID="427758680949325",
  FACEBOOK_APP_SECRET="968e43bd0e2f59b7928cb8ea8780d581";
  
  var fbopts = {
  clientID:FACEBOOK_APP_ID,
  clientSecret:FACEBOOK_APP_SECRET,
  callbackURL:'http://localhost:8080/auth/facebook/callback'
  
  };
  var fbCallback=function(accessToken,refreshToken,profile,cb){
   console.log(accessToken,refreshToken,profile);
  
  };
   
   passport.use(new FacebookStrategy(fbopts,fbCallback));


 app.route('/')
 .get(passport.authenticate('facebook'));

app.route('/auth/facebook/callback')
 .get(passport.authenticate('facebook',function(err,user,info){
  console.log(err,user,info);
    
    
}));

app.listen(8080);
console.log("listenin port 8080");
