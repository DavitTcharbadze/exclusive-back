const express = require('express');
const { connectToDatabase } = require('../services/database');

const router = express.Router();

router.get('/:sectionId', async (req, res) => {
  const arr = [];

  try {
    const database = await connectToDatabase();
    const sections = database.collection('sections');
    const result = sections.find({ _id: sectionId });


    await result.forEach((doc) => {
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
