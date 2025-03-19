require('dotenv').config();


const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { user } = require("../models"); // 🔹 Gunakan "user" sesuai model

JWT_SECRET="secret123"
JWT_EXPIRES_IN="30m"

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email dan password harus diisi" });
    }

    // 🔹 Gunakan Sequelize dengan `findOne({ where: { email } })`
    const foundUser = await user.findOne({ where: { email } });
    if (!foundUser) {
      return res.status(401).json({ message: "Email atau password salah" });
    }

    // 🔹 Cek password dengan bcrypt
    // const isMatch = bcrypt.compareSync(password, foundUser.password);
    // if (!isMatch) {
    //   return res.status(401).json({ message: "Email atau password salah" });
    // }

    // 🔹 Generate JWT token
    const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

    res.cookie("token", token, {
      httpOnly: true, // Tidak bisa diakses JavaScript (aman dari XSS)
      secure: false,
      sameSite: "Strict", // Mencegah pengiriman cookie ke situs lain (CSRF protection)
      maxAge: 30 * 60 * 1000, // 30 hari
    });

    res.json({ message: "berhasil" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

const logout = async (req,res) => {
  res.clearCookie("token", { httpOnly: true, secure: false, sameSite: "lax" });
  res.json({ message: "Logout berhasil" });
}

module.exports = { login, logout };
