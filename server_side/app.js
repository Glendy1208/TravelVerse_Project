require('dotenv').config();

const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')
const usersRoute = require('./routes/userRoute')
const authRoutes = require('./routes/authRoutes')
const protecRoutes = require('./routes/protectedRoutes')
const { refreshToken } = require('./controllers/refreshToken')

const app = express();
app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:3000", // 🔹 Harus sesuai dengan frontend
  credentials: true
}));

app.use(express.urlencoded({ extended: true }));

app.get('/api/refresh', refreshToken);

app.use('/api', authRoutes);
app.use('/api', protecRoutes);
app.use('/users', usersRoute);



// Jalankan server
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});