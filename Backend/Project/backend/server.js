const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/auth.route')
const productsRoutes = require('./src/routes/products.route');
const ordersRoutes = require('./src/routes/orders.route');
const paymentRoutes = require('./src/routes/payment.route');
const analyticsRoutes = require('./src/routes/analytics.route');





dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.get("/", (req, res) => {
    res.send("Backend Working.");
})


app.use('/api/auth', authRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/analytics', analyticsRoutes);





const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})