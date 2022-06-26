const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  licensePlate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Vehicle', vehicleSchema);