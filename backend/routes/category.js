const express = require("express");
const router = express.Router();

const {
  addCategory,
  getCategory,
  updateCategory,
  showAllCategories,
  deleteCategory
} = require("../controllers/category");

router.post("/add", addCategory);
router.put("/update/:id", updateCategory);
router.get("/all",   showAllCategories,);
router.get("/get/:id", getCategory);
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;