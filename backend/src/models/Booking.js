const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({

    date: String,
    approved: Boolean,

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // esta se referindo ao model User que já criamos
    },

    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);