var express = require("express");
var mongoose = require('mongoose');
var app = express();

const productsRoutes = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//TODO add string to connect to db
mongoose.connect('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    .then(() => {
        console.log('Connected to DB!')
    });

app.use("/api/products", productsRoutes);

module.exports = app;