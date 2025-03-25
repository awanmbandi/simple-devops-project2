const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /api/providers - List healthcare providers
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id, name, specialty, location, contact FROM providers');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching providers:', error);
    res.status(500).json({ error: 'Failed to fetch providers' });
  }
});

// GET /api/providers/:id - Get provider details
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT id, name, specialty, location, contact, details FROM providers WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Provider not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching provider:', error);
    res.status(500).json({ error: 'Failed to fetch provider' });
  }
});

// POST /api/providers - (Optional) Create a new provider record
router.post('/', async (req, res) => {
  const { name, specialty, location, contact, details } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO providers (name, specialty, location, contact, details) VALUES (?, ?, ?, ?, ?)',
      [name, specialty, location, contact, details]
    );
    res.status(201).json({ id: result.insertId, name, specialty, location, contact, details });
  } catch (error) {
    console.error('Error creating provider:', error);
    res.status(500).json({ error: 'Failed to create provider' });
  }
});

module.exports = router;
