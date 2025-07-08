import express from 'express';
// import bodyParser from 'body-parser';
import routesHandler from './handler.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use('/api', routesHandler);

const PORT = 4000;

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
}); 


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
});