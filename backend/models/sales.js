const mongoose = require('mongoose');

const sales = mongoose.Schema({
    clientName: {type: String, required: true},
    clientID: {type: Number, required: true},
    date: {type: String, required: true},
    salesman: {type: mongoose.Schema.Types.ObjectId, ref:"users", required: true},
    totalSale: {type: Number, required: true},
    saleStatus: {type: String, required: true},
    saleItems: {type: Array, required: true},
});
module.exports = mongoose.model("Sales", sales);