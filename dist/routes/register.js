"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const users_1 = require("../model/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = (0, express_1.Router)();
router.post('/register', middlewares_1.Parameters, middlewares_1.validateEmail, middlewares_1.validatePassword, middlewares_1.validationDOB, middlewares_1.genderCheck, async (req, res) => {
    const { firstName, lastName, email, dateOfBirth, password, gender } = req.body;
    const exists = await users_1.userModel.findOne({ email });
    if (exists) {
        res.status(400).json({ message: "Email already registered" });
        return;
    }
    const hidePassword = await bcrypt_1.default.hash(password, 10);
    const newUser = await users_1.userModel.create({
        firstName,
        lastName,
        email,
        dateOfBirth,
        password: hidePassword,
        gender
    });
    res.status(200).json({
        message: 'Registration sucessful',
        data: {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            dateOfBirth: newUser.dateOfBirth,
            gender: newUser.gender
        }
    });
});
exports.default = router;
//# sourceMappingURL=register.js.map