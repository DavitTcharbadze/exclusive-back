const express = require('express');
const { connectToDatabase } = require('../services/database');

const router = express.Router();

router.get('/:sectionId', async (req, res) => {
  const { sectionId } = req.params;
  const arr = [];

  try {
    const database = await connectToDatabase();
    const sections = database.collection('sections');
    const cursor = sections.find({ name: sectionId });

    await cursor.forEach((doc) => {
      arr.push(doc);
    });

    res.json({
      data: arr,
    });
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
