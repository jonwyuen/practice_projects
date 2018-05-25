const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStragegy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function(
  email,
  password,
  done
) {
  // verify this username and pw,
  // call done with the user if correct username and pw, else call done w/ false
  User.findOne({ email: email }, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);

    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if (!isMatch) return done(null, false);
      return done(null, user);
    });
  });
});

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
passport.use(localLogin);

