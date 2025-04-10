require('dotenv').config();

const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')

const bodyParser = require('body-parser')

//routes
const usersRoute = require('./routes/userRoute')
const authRoutes = require('./routes/authRoutes')
const protecRoutes = require('./routes/protectedRoutes')
const usercategoriesRoute = require('./routes/userCategories')
const adminRoutes = require('./routes/adminRoutes')


const { refreshToken } = require('./controllers/refreshToken')

const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true,
  allowedHeaders: 'Content-Type,Authorization',
  methods: "GET, POST, PUT, DELETE, OPTIONS",
}));

app.use(express.urlencoded({ extended: true }));

app.get('/api/refresh', refreshToken);

app.use('/api', authRoutes);
app.use('/api', protecRoutes);
app.use('/api', usercategoriesRoute);
app.use('/api', usersRoute);

app.use("/api", adminRoutes)

// Jalankan server
const SERVER_URL = process.env.SERVER_URL || "http://localhost:5430"
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on ${SERVER_URL}`);
});