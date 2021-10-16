const Sales = require("../models/sales");
// const NewSale = require("../models/nale");

exports.getSales = (req, res) => {
    Sales.find()
    // .populate('users')
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
        res.status(201).json("savedSale");
    });
};