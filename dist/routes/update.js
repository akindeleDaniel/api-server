"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../model/users");
const auth_1 = __importDefault(require("../middlewares/auth"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = (0, express_1.Router)();
router.put('/update/:email', auth_1.default, async (req, res) => {
    const { email } = req.params;
    if (!email) {
        res.status(400).json({ message: "Email not found" });
        return;
    }
    const { firstName, lastName, password, gender, dateOfBirth } = req.body;
    const user = await users_1.userModel.findOne({ email });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    if (firstName)
        user.firstName = firstName;
    if (lastName)
        user.lastName = lastName;
    if (dateOfBirth)
        user.dateOfBirth = dateOfBirth;
    if (gender)
        user.gender = gender;
    if (password) {
        const hidden = await bcrypt_1.default.hash(password, 10);
        user.password = hidden;
    }
    await user.save();
    const userObject = user.toObject();
    const { password: _, ...safeUser } = userObject;
    res.status(200).json({ message: 'User updated successfully', user: safeUser
    });
});
exports.default = router;
//# sourceMappingURL=update.js.map