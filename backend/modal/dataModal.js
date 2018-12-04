const mongoose = require('mongoose');

const dataSchema = mongoose.Schema ({

  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('data', dataSchema);
