const mongoose = require('mongoose');

const bugSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  time: {
    type: Number,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Open',
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Bug', bugSchema);
