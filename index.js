import express from 'express';
import dotenv from 'dotenv';
import DbCon from './libs/db.js';
import AuthRoutes from './routes/AuthRoutes.js';

dotenv.config();

// Initialize Database Connection
DbCon();

const PORT = process.env.PORT || 8000;
const app = express();

// Middleware to parse JSON responseeee
app.use(express.json()); 

// Routes define
app.use('/auth', AuthRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
