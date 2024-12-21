const express = require('express');
const cors = require('cors');
const userRoutes = require('./Routes/UserRoutes');
const productRoutes = require('./Routes/ProductRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/product', productRoutes);

app.listen(3000, () => {
    console.log("Listening to port 3000");
});