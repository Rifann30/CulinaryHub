require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'culinaryhub',
  waitForConnections: true,
  connectionLimit: 10,
});

app.get('/health', (req, res) => res.json({ ok: true }));

app.post('/api/reservations', async (req, res) => {
  try {
    const { name, date, time, guests, note } = req.body;
    if (!name || !date || !time || !guests) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const [result] = await pool.execute(
      'INSERT INTO reservations (name, date, time, guests, note) VALUES (?, ?, ?, ?, ?)',
      [name, date, time, guests, note || null]
    );

    return res.status(201).json({ id: result.insertId });
  } catch (err) {
    console.error('DB error', err);
    return res.status(500).json({ error: 'Database error' });
  }
});

app.get('/api/reservations', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM reservations ORDER BY created_at DESC');
    return res.json(rows);
  } catch (err) {
    console.error('DB error', err);
    return res.status(500).json({ error: 'Database error' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API server listening on http://localhost:${port}`));
