const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'all-green-valley',
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal');
    process.exit();
  }
  console.log('Koneksi ke database berhasil!');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.post('/auth', (req, res) => {
  const { name, email, password } = req.body;

  const sql = 'INSERT INTO contacts (name, email, password) VALUES (?, ?, ?)';
  db.query(sql, [name, email, password], (err) => {
    if (err) {
      console.error('Gagal simpan ke database');
      return res.status(500).send('Gagal menyimpan data');
    }

    res.send('Data Anda telah tersimpan!');
  });
});

app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  const sql = 'SELECT * FROM contacts WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Kesalahan saat login:', err);
      return res.status(500).send('Terjadi kesalahan server');
    }

    if (results.length === 0) {
      return res.status(401).send('Email tidak ditemukan');
    }

    const user = results[0];
    if (user.password !== password) {
      return res.status(401).send('Password salah');
    }

    res.send('Login berhasil!');
  });
});

app.listen(PORT, () => {
  console.log(`Server Express berjalan di http://localhost:${PORT}`);
});
