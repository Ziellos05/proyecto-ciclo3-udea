const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const producto = mongoose.Schema({
    id: {type: String, required: true, unique: true},
    nameProduct: {type: String, required: true},
    unitPrice: {type: Number, required: true},
    description: {type: String, required: true},
    statusProduct: {type: Boolean, required: true}
});

producto.plugin(uniqueValidator);

module.exports = mongoose.model("Producto", producto);