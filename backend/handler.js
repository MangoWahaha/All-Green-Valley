import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcrypt';
const router = express.Router();

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
        res.status(201).json({ message: 'Login successfully!', Passed: result.insertId });
        
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
        console.log("Email yang dicari:", email);
        console.log("Hasil dari database:", rows);
        console.log("Password yang dimasukkan:", password);
        console.log("Password dari DB:", user.password);

        const matchpass = await bcrypt.compare(password, user.password);
        console.log("Password match:", matchpass);

        if (!matchpass) {
            return res.status(401).json({error : 'Invalid email or password'})
        }
        res.status(200).json({message : 'Login successful' , user: {id: user.id, name: user.name, email: user.email}});

    }catch (err) {
        console.error('Error during login:', err);
        return res.status(500).json({ error: 'Internal server error.' });
}
});



export default router;