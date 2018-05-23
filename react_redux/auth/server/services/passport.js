const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStragegy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.secret
};

const jwtLogin = new JwtStragegy(jwtOptions, function(payload, done) {
  // see if user id in payload exists in db
  // if yes, call done with that user, else call done w/o user obj
  User.findById(payload.sub, function(err, user) {
    if (err) return done(err, false);
    if (user) done(null, user);
    else done(null, false);
  });
});

passport.use(jwtLogin);
