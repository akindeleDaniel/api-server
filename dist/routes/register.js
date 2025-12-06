"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const users_1 = require("../db/users");
const router = (0, express_1.Router)();
router.post('/register', middlewares_1.Parameters, middlewares_1.validateEmail, middlewares_1.validatePassword, middlewares_1.validationDOB, middlewares_1.genderCheck, async (req, res) => {
    const { firstName, lastName, email, dateOfBirth, password, gender } = req.body;
    const exists = await users_1.userModel.findOne({ email });
    if (exists) {
        res.status(400).json({ message: "Email already registered" });
        return;
    }
    const newUser = await users_1.userModel.create({
        firstName,
        lastName,
        email,
        dateOfBirth,
        password,
        gender
    });
    res.status(200).json({ message: 'Registration sucessful', data: newUser });
});
exports.default = router;
//# sourceMappingURL=register.js.map