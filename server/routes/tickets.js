const express = require('express');

const bugController = require('../controllers/bugController');

const router = express.Router();

router.get('/', bugController.getBug, (req, res) => {
  res.status(200).json({ bugs: res.locals.bugs });
});

router.post('/', bugController.addBug, (req, res) => {
  res.status(200).json({ addBug: res.locals.addBug });
});

router.delete('/:id', bugController.deleteBug, (req, res) => {
  res.status(200).json({ deleteBug: res.locals.deleteBug });
});

router.patch('/:id', bugController.updateBug, (req, res) => {
  res.status(200).json({ updateBug: res.locals.updateBug });
});

module.exports = router;
