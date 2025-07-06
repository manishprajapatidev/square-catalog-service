const express = require('express');
const { listCategories } = require('../services/categoryService');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await listCategories();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
