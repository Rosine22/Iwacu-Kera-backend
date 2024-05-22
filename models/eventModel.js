const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({

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
    required: true,
  },
  picture: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Event', EventSchema);