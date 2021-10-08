const mongoose = require('mongoose');

const users = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    rol: {type: String},
    status: {type: Boolean, required: true},
});

module.exports = mongoose.model("User", users);