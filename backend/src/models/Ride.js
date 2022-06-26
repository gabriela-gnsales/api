const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    //  Vincular o usuário através do objeto User
    user: {
      type: Object,
      required: true
    },
    //  Vincular o veículo através do objeto Vehicle
    vehicle: {
      type: Object,
      required: true
    },
    startPlace: {
        type: String,
        required: true
    },
    finishPlace: {
    type: String,
    required: true
    },
    status: {
    type: String,
    required: false // VERIFICAR - prof tinha colocado true inicialmente
    },
    startTime: {
    type: Date,
    required: false
    },
    finishTime: {
    type: Date,
    required: false
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
});

mongoose.model('Ride', rideSchema);