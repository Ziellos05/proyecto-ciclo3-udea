const mongoose = require('mongoose');

const producto = mongoose.Schema({
    id: {type: String},
    nameProduct: {type: String, required: true},
    unitPrice: {type: Number, required: true},
    description: {type: String, required: true},
    statusProduct: {type: Boolean, required: true}
});


module.exports = mongoose.model("Producto", producto);