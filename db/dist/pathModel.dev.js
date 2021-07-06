"use strict";

var mongoose = require('mongoose');

var stations = require('./stationsModel');

var paths = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    validate: function validate(value) {
      if (value < 0) {
        throw new Error('id must be a postive number');
      }
    }
  },
  stations: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'stations'
  }],
  description: {
    type: String,
    required: true,
    trim: true
  }
});
var path = mongoose.model('paths', paths);
module.exports = path;