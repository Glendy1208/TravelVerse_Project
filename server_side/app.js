require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const usersRoute = require('./route/UsersRoute')

const app = express();
app.use(bodyParser.json());

app.use('users', usersRoute)



// Jalankan server
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});