import express from 'express';
import mysql from 'mysql2';
const router = express.Router();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agv_project'
});

router.post('/login', async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({error:'have to be required'})
    }
    try {
        const [result]= await db.promise.query('INSERT INTO login_sign (name, email, password) VALUES (?, ?, ?)', 
            [name, email, password]
        );
        res.status(201).json({ message: 'Login successfully!', Passed: result.insertId });
    } catch (error) {
        console.error('Error adding account', error);
    }
});



export default router;