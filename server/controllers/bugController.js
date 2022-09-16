const Bug = require('../models/bugModel');
const bugController = {};

bugController.addBug = (req, res, next) => {
  Bug.create({
    title: req.body.title,
    description: req.body.description,
    time: req.body.time,
    priority: req.body.priority,
    author: req.body.author,
  })
    .then((data) => {
      res.locals.addBug = data;
      return next();
    })
    .catch((e) => {
      next('Error in bugController.createBug: ' + JSON.stringify(e));
    });
};

bugController.getBug = (req, res, next) => {
  Bug.find({})
    .then((data) => {
      res.locals.bugs = data;
      next();
    })
    .catch((e) => {
      next('Error in bugController.getBug: ' + JSON.stringify(e));
    });
};

bugController.deleteBug = (req, res, next) => {
  const { id } = req.params;

  Bug.findOneAndDelete({ _id: id })
    .then((data) => {
      res.locals.deleteBug = data;
      return next();
    })
    .catch((e) => {
      return next('Error in bugController.deleteBug: ' + JSON.stringify(e));
    });
};

bugController.updateBug = (req, res, next) => {
  const { id } = req.params;

  Bug.findOneAndUpdate(
    { _id: id },
    { ...req.body },
    { useFindAndModify: false, new: true }
  )
    .then((data) => {
      res.locals.updateBug = data;
      return next();
    })
    .catch((e) => {
      return next('Error in bugController.updateBug: ' + JSON.stringify(e));
    });
};

module.exports = bugController;
