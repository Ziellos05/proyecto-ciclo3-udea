const Sales = require("../models/sales");

exports.getSales = (req, res) => {
    Sales.find()
    .then((salesResults)=>{
        res.status(200).json(salesResults);
    })
};

exports.addSale = (req, res) => {
    const sale = new Sales({
        clientName: req.body.clientName,
        clientID: req.body.clientID,
        date: req.body.date,
        salesman: req.body.salesman,
        totalSale: req.body.totalSale,
        saleStatus: req.body.saleStatus,
        saleItems: req.body.saleItems,
    });

    sale.save().then((savedSale) => {
        res.status(201).json("Sale saved successfully");
    }).catch((error) => {
        res.status(500).json({err: error});
    })
};

exports.getSalesOnSearch = (req, res) => {

    console.log(req.params.id);

    Sales.findById(req.params.id).then((findSale) => {
        if(findSale) {
            res.status(200).json(findSale);
        } else{
            res.status(404).json("Venta no encontrada");
        }
    })
};

exports.getSalesByClientID = (req, res) => {

    console.log(req.params.clientID);

    Sales.find({clientID: req.params.clientID}).then((findSale) => {
        if(findSale) {
            res.status(200).json(findSale);
        } else{
            res.status(404).json("Ventas no encontradas");
        }
    });
    
};

exports.editSale = (req, res) => {
    const id = req.params.id;
    console.log(id);

    const saleUpd = new Sales({
        _id: id,
        clientName: req.body.clientName,
        clientID: req.body.clientID,
        date: req.body.date,
        salesman: req.body.salesman,
        totalSale: req.body.totalSale,
        saleStatus: req.body.saleStatus,
        saleItems: req.body.saleItems,
    });

    Sales.findByIdAndUpdate(id, saleUpd).then((savedSale) => {
        res.status(200).json("Sale updated successfully");
    });
};
