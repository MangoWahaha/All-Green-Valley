import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = express.Router();

const jwt_code = 'pelpel123';

router.get('/data-tokens', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'The token is not available' });

  try {
    const decoded = jwt.verify(token, jwt_code);
    res.json({
      message: `Halo ${decoded.name}, your data is safe`,
      user: decoded,
    });
  } catch (err) {
    res.status(403).json({ error: 'The token is not valid' });
  }
});

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agv_project'
});


router.post('/auth', async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({error:'have to be required'})
    }
    try {
        const passhash = await bcrypt.hash(password, 10); //shuffle 2^10
        const [result]= await db.promise().query('INSERT INTO login_sign (name, email, password) VALUES (?, ?, ?)', 
            [name, email, passhash]
        );

        const token = jwt.sign (
            {id: result.insertId, name, email},
            jwt_code,
            {expiresIn: '1h'}
        );

        res.status(201).json({ message: 'Login successfully!', Passed: result.insertId, token });
        
    } catch (error) {
        console.error('Error adding account', error);
    }
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    console.log("Body yang diterima:", req.body);
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required.' });
        }
    
    try {
        const [rows] = await db.promise().query('SELECT * FROM login_sign WHERE email = ?', [email]);
        console.log("DB rows:", rows);
        
        if (rows.length === 0) {
             return res.status(401).json({error: 'Invalid email or password'});
        }

        const user = rows[0];
        console.log("Email that is looking for:", email);
        console.log("Results from database:", rows);
        console.log("Password that input:", password);
        console.log("Password from DB:", user.password);

        const matchpass = await bcrypt.compare(password, user.password);
        console.log("Password match:", matchpass);

        if (!matchpass) {
            return res.status(401).json({error : 'Invalid email or password'})
        }

        const token= jwt.sign({
            id: user.id, name: user.name, email: user.email
        }, jwt_code, {expiresIn: '1h'});

        res.status(200).json({message : 'Login successful' , user: {id: user.id, name: user.name, email: user.email}, token});

    }catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ error: 'Internal server error.' });
}
});

export default router;