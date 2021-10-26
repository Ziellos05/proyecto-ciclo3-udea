var express = require("express");
var mongoose = require("mongoose");
const cors = require("cors");
var app = express();
require("dotenv").config();

const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const salesRoutes = require("./routes/sales");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//TODO add string to connect to db
mongoose.connect(process.env.MONGODB_REACTIVOS).then(() => {
  console.log("Connected to DB!, running in local port 3002");
});

// Aquí concateno la ruta para los APIs en general

app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/sales", salesRoutes);

module.exports = app;
