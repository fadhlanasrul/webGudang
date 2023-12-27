const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Users', UserSchema);
