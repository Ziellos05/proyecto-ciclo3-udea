const mongoose = require('mongoose');

const newSale = mongoose.Schema({
    clientName: {type: String, required: true},
    clientID: {type: Number, required: true},
    date: {type: Date, required: true},
    salesman: {type: String, required: true},
    totalSale: {type: Number, required: true},
    saleItems: {type: Array, required: true},
    status: {type: String, required: true},
});

module.exports = mongoose.model("newSale", newSale);