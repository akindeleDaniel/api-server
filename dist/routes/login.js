"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../db/users");
const router = (0, express_1.Router)();
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await users_1.userModel.findOne({ email });
    if (!user) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    if (user.password !== password) {
        res.status(400).json({ message: "Invalid email or password" });
        return;
    }
    res.status(200).json({ message: "Login successful", user });
});
exports.default = router;
//# sourceMappingURL=login.js.map