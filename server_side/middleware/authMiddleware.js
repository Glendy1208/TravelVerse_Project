require('dotenv').config();

const jwt = require("jsonwebtoken");

JWT_SECRET="secret123"
JWT_EXPIRES_IN="30m"

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token; // 🔹 Ambil token dari cookie
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Simpan data user di `req.user`
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};

module.exports = authMiddleware;
