const LostItem = require('../models/LostItem');
const FoundItem = require('../models/FoundItem');
const User = require('../models/User');
const nodemailer = require('nodemailer');

exports.reportLostItem = async (req, res) => {
  try {
    const { itemName, locationLost, contact, description, category } = req.body;
    const image = req.file?.filename;

    const newItem = new LostItem({
      itemName, locationLost, contact, description, category, image,
      reportedBy: req.user,
    });

    await newItem.save();
    res.status(201).json({ message: 'Lost item reported', item: newItem });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Optional: Notify lost reporter when a match is found
exports.matchFoundItem = async (foundItem) => {
  const matches = await LostItem.find({ itemName: foundItem.itemName });

  for (const match of matches) {
    const user = await User.findById(match.reportedBy);
    if (user && user.email) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: `"Lost & Found" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject: 'Item Matching Your Lost Report Found!',
        text: `A similar item (${foundItem.itemName}) has been reported found. Please visit the security office to verify.`,
      };

      await transporter.sendMail(mailOptions);
    }
  }
};
