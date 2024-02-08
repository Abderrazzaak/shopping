const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProduct,
  updateProduct,
  showAllProduct,
  dealOfProduct
} = require("../controllers/product");

router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
router.get("/all", showAllProduct);
router.get("/get/:id", getProduct);
router.delete("/deleteProduct/:id", dealOfProduct);

module.exports = router;