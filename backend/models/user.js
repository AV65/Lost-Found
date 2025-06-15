const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  faculty: String,
  department: String,
  registrationNumber: {type: String, unique: true},
  course: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model('User', userSchema);
