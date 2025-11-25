"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileManager_1 = require("../fileManager");
const router = (0, express_1.Router)();
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const users = await (0, fileManager_1.readUsers)();
    const user = users.find((u) => u.email === email);
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