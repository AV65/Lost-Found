const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  image: String,
  itemName: String,
  locationLost: String,
  contact: String,
  description: String,
  category: String,
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('LostItem', lostItemSchema);
