const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { reportFoundItem } = require('../controllers/foundController');

router.post('/report', auth, reportFoundItem);

module.exports = router;
