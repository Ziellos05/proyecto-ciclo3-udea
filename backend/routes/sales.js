var salesTable = require("../../src/utilities/listaVentas");

module.exports = function (app) {

    // API GET Request
    // Se obtiene la tabla de ventas registradas en la base de datos
    app.get("/api/salesTable", function(req, res) {
        res.json(salesTable);
    });

    // API POST Request
    // Envia nueva venta a base de datos
    app.post("/api/salesTable", function(req, res) {
        salesTable.push(req.body);
        res.json(true);
    })
}