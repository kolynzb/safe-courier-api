const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parcelSchema = new Schema({
    parcelType: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    weight: {
        type: Number,
        required: true
    },
    weightUnit: {
        type: String,
        required: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
       name: {
              type: String,
                required: true
       },
       email: {
                type: String,
                required: true
       },
         phoneNumber: {
                type: String,
                required: true  
         },
            address: {
                type: String,
                required: true
            }
    },
    pickupLocation: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    presentLocation: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    },
    price: {
        type: Number,
    },
    
    trackingNumber: {
        type: String,
    }

});

module.exports = mongoose.model('Parcel', parcelSchema);