const FoundItem = require('../models/FoundItem');
const { matchFoundItem } = require('./lostController');

exports.reportFoundItem = async (req, res) => {
  try {
    const { itemName, locationFound, contact, category } = req.body;

    const newItem = new FoundItem({
      itemName, locationFound, contact, category,
      reportedBy: req.user,
    });

    await newItem.save();

    // Attempt to notify users who reported similar lost items
    await matchFoundItem(newItem);

    res.status(201).json({ message: 'Found item reported', item: newItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
