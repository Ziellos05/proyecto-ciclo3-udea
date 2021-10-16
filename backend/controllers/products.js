const Producto = require("../models/products");

exports.getProducts = (req, res) => {
    Producto.find().then((productResult) => {
        res.status(200).json(productResult);
    })
};

exports.addProduct = (req, res) => {
    console.log(req.body);
    const insertProduct = new Producto({
        id: req.body.id,
        nameProduct: req.body.nameProduct,
        unitPrice: req.body.unitPrice,
        description: req.body.description,
        statusProduct: req.body.statusProduct,
    });
        insertProduct.save().then((createdProduct) => {
        console.log(createdProduct);
        res.status(201).json("Registro creado correctamente");
        
    })
    .catch((error) => {
        res.status(500).json({err: error});
    });
};

exports.getProductId = (req, res) => {
    Producto.findById(req.params.id).then((productResult) => {
        if(productResult) {
            res.status(200).json(productResult);
        } else {
            res.status(404).json("Producto no encontrado");
        }
    });
};

exports.getProductInStock = (req, res) => {
    Producto.find({ statusProduct: true }).then((productResult) => {
        res.status(200).json(productResult);
    });
};