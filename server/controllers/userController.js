const User = require('../models/userModel');
const userController = {};

userController.createUser = (req, res, next) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then(() => next())
    .catch((e) => {
      next('Error in userController.createUser: ' + JSON.stringify(e));
    });
};

userController.verifyUser = (req, res, next) => {
  User.findOne({
    username: req.body.username,
    password: req.body.password,
  })
    .then((data) => {
      if (!data) {
        return next('Error in userController.verifyUser: ' + JSON.stringify(e));
      } else {
        res.locals.user = req.body.username;
        return next();
      }
    })
    .catch((e) => {
      return next('Error in userController.verifyUser: ' + JSON.stringify(e));
    });
};

module.exports = userController;
