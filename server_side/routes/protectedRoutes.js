const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // Pastikan ini sudah diperbaiki

const router = express.Router();

router.get("/protected", authMiddleware, (req, res) => {
    res.json({ message: `Halo ${req.user.email}, ini data rahasia!`, user: req.user });
});

module.exports = router;
