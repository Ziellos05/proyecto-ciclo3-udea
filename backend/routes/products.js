const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProduct);
router.get("/available", ProductController.getProductInStock);
router.get("/:id", ProductController.getProductId);



module.exports = router;