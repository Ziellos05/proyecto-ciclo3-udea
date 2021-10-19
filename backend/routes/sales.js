const express = require("express");
const router = express.Router();
const salesController = require("../controllers/sales");

router.get("", salesController.getSales);
router.post("", salesController.addSale);
router.get("/clientID/:id", salesController.getSalesOnSearch);

module.exports = router;