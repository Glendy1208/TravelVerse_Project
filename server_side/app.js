require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

// USER 
const userRoute = require('./routes/userRoute');
app.use('/users', userRoute);

// Jalankan server
const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});