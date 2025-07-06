const express = require('express');
const { listItems } = require('../services/productService');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { categoryId } = req.query;
    const items = await listItems(categoryId);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
