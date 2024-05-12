const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Iphone 15 Pro', 'Xiaomi Poco', 'Google Pixel 7']);
});

module.exports = router;
