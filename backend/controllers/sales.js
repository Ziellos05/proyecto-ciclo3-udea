const Sales = require("../models/sales");

exports.getSales = (req, res) => {
    Sales.find()
    // .populate("users")
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
    const id = req.params.id;

    Sales.find({ clientID: id }).then((findSale) => {
        if(findSale) {
            res.status(200).json(findSale);
        } else{
            res.status(404).json("Venta no encontrada");
        }
    });
}