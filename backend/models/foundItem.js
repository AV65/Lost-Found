const mongoose = require('mongoose');

const foundItemSchema = new mongoose.Schema({
  itemName: String,
  locationFound: String,
  contact: String,
  category: String,
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FoundItem', foundItemSchema);
