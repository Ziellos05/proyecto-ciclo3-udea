const mongoose = require('mongoose');

const sales = mongoose.Schema({
    id: {type: Number, required: true},
    salesman: {type: String, required: true},
    totalSale: {type: Number, required: true},
    status: {type: String, required: true},
    salesItems: {type: Array, required: true},
});

module.exports = mongoose.model("Sales", sales);