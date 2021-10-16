var express = require("express");
var mongoose = require('mongoose');
const cors = require("cors");
var app = express();

const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//TODO add string to connect to db
mongoose.connect(
    "mongodb+srv://waalvarex:fmI9GIbIdQs7uuDo@cluster0.lkuo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to DB!')
    });

// Aquí concateno la ruta para los APIs en general

app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);

module.exports = app;