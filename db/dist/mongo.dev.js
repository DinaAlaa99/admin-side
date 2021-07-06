"use strict";

var mongoose = require('mongoose');

var mongoPath = "mongodb+srv://GraduationProject:GraduationProject1234@PublicTransitTracker.p6tjd.mongodb.net/PublicTransitTracker?retryWrites=true&w=majority";

module.exports = function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect(mongoPath, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true //serverSelectionTimeoutMS: 5000 // Keep trying to send operations for 5 seconds

          }));

        case 2:
          return _context.abrupt("return", mongoose);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};