require('dotenv').config();

const jwt = require("jsonwebtoken");

JWT_SECRET="secret123"
JWT_EXPIRES_IN="30m"

const refreshToken = (req, res) => {
  const oldToken = req.cookies.token;
  if (!oldToken) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(oldToken, JWT_SECRET);

    // Buat token baru dengan waktu 30 menit lagi
    const newToken = jwt.sign({ id: decoded.id, email: decoded.email }, JWT_SECRET, { expiresIn: "30m" });

    res.cookie("token", newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 30 * 60 * 1000, // 🔹 30 menit
    });

    res.json({ message: "Token refreshed" });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Token expired or invalid" });
  }
};

module.exports = { refreshToken };
