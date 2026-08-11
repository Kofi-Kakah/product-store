import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';


dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);
    
const PORT = process.env.PORT || 5500;


app.listen(PORT, async () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
    await connectDB();
});

