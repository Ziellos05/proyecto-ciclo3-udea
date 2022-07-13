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

exports.deleteProduct = (req, res) => {
    const id = req.params.id;

    Producto.deleteOne({ _id: id}).then((productResult) => {
        res.status(200).json("Producto eliminado");
    });
};

exports.editProduct = (req, res) => {
    const id = req.params.id;
  
    const productoUpd = new Producto({
      _id: id,
      id: req.body.id,
      nameProduct: req.body.nameProduct,
      unitPrice: req.body.unitPrice,
      description: req.body.description,
      statusProduct: req.body.statusProduct,
    });
    console.log(productoUpd);
  
    Producto.findByIdAndUpdate(id, productoUpd).then((productoResult) => {
      res.status(200).json("El producto se actualizó satisfactoriamente");
    });
  };


  exports.findProduct = (req, res) => {
    const nameProduct = req.params.nameProduct;

    Producto.find({nameProduct: { $regex: ".*" + nameProduct + ".*" } })
    .then((products) => {
        res.status(200).json(products);
    });
}