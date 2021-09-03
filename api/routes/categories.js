const router = require("express").Router();
const Category = require("../models/Category");

// CREATE CATEGORIES
router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const savedCat = await newCat.save();
    res.status(200).json(savedCat);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server error");
  }
});

// GET CATEGORIES
router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
