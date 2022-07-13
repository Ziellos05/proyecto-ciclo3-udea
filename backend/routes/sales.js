const express = require("express");
const router = express.Router();
const salesController = require("../controllers/sales");

router.get("", salesController.getSales);
router.post("", salesController.addSale);
router.get("/:id", salesController.getSalesOnSearch);
router.put("/:id", salesController.editSale);
router.get("/client/:clientID", salesController.getSalesByClientID);

module.exports = router;