const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/products");

router.get("", ProductController.getProducts);
router.post("", ProductController.addProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/available", ProductController.getProductInStock);
router.get("/:id", ProductController.getProductId);
router.put("/:id", ProductController.editProduct);
router.get("/:nameProduct", ProductController.findProduct);



module.exports = router;