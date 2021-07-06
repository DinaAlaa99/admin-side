"use strict";

var mongoose = require('mongoose');

var stations = require('./stationsModel');

var vehicles = new mongoose.Schema({
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
  plateNo: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: Boolean,
    require: true
  },
  lastStation: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'stations'
  },
  path: {
    type: Array,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  fare: {
    type: Number,
    required: true,
    trim: true
  }
});
var vehicle = mongoose.model('vehicles', vehicles);
module.exports = vehicle;