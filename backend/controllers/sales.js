const Sales = require("../models/sales");
const NewSale = require("../models/newSale");

exports.getSales = (req, res) => {
    Sales.find().then.((salesResults)=>{
        res.status(200).json(salesResults);
    })
};

exports.addSale = (req, res) => {
    const newSale = new NewSale({
        clientName: req.body.clientName,
        clientID: req.body.clientID,
        date: req.body.date,
        salesman: req.body.salesman,
        totalSale: req.body.totalSale,
        saleItems: req.body.saleItems,
    });

    newSale.save().then((savedSale) => {
        res.status(201).json(savedSale);
    });
};