require('dotenv').config();


const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { user } = require("../models"); // 🔹 Gunakan "user" sesuai model

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({ field: "email", message: "Email is required" });
    }

    if (!password) {
      return res.status(400).json({ field: "password", message: "Password is required" });
    }

    const foundUser = await user.findOne({ where: { email } });
    if (!foundUser) {
      return res.status(401).json({ field: "email", message: "Email is incorrect" });
    }

    const isMatch = bcrypt.compareSync(password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json({ field: "password", message: "Password is incorrect" });
    }

    const token = jwt.sign({ id: foundUser.id, email: foundUser.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 30 * 60 * 1000,
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

const register = async (req,res) => {
    try {
      const { name, username, email, user_category_id ,password } = req.body;

      // Cek apakah email sudah digunakan
      const existingUser = await user.findOne({ where: { email } });
      if (existingUser) {
          return res.status(400).json({ message: "Email sudah terdaftar" });
      }

      // Hash password sebelum disimpan
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Simpan user baru ke database
      const newUser = await user.create({
          email,
          name,
          username,
          user_category_id,
          password: hashedPassword,
      });

      res.status(201).json({ message: "Registrasi berhasil", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
}

module.exports = { login, logout, register };
