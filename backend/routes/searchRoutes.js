const express = require('express');
const router = express.Router();
const LostItem = require('../models/LostItem');
const FoundItem = require('../models/FoundItem');

// Search lost items by category
router.get('/lost/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const items = await LostItem.find({ category });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search found items by category
router.get('/found/:category', async (req, res) => {
  const category = req.params.category;
  try {
    const items = await FoundItem.find({ category });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
