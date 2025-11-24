"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const fileManager_1 = require("../fileManager");
const router = (0, express_1.Router)();
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const users = await (0, fileManager_1.readUsers)();
    const user = users.find((u) => u.email === email);
    if (!user) {
        res.status(400).json({ message: 'User not found' });
        return;
    }
    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        res.status(400).json({ message: 'Invalid email or password' });
        return;
    }
    res.status(200).json({ message: 'Login successful', user });
});
exports.default = router;
//# sourceMappingURL=login.js.map