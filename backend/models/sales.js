const mongoose = require('mongoose');

const sales = mongoose.Schema({
    // _id: mongoose.ObjectID,
    clientName: {type: String, required: true},
    clientID: {type: Number, required: true},
    date: {type: String, required: true},
    salesman: {type: String, required: true},
    totalSale: {type: Number, required: true},
    saleStatus: {type: String, required: true},
    saleItems: {type: Array, required: true},
});
module.exports = mongoose.model("Sales", sales);