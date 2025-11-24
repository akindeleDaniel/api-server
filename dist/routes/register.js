"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const fileManager_1 = require("../fileManager");
const router = (0, express_1.Router)();
router.use(middlewares_1.Parameters);
router.use(middlewares_1.validateEmail);
router.use(middlewares_1.validatePassword);
router.use(middlewares_1.validationDOB);
router.use(middlewares_1.genderCheck);
router.post('/register', middlewares_1.Parameters, middlewares_1.validateEmail, middlewares_1.validatePassword, middlewares_1.validationDOB, middlewares_1.genderCheck, async (req, res) => {
    const { firstName, lastName, email, dateOfBirth, password, gender } = req.body;
    const users = await (0, fileManager_1.readUsers)();
    const exists = users.find(u => u.email === email);
    if (exists) {
        res.status(400).json({ message: 'Email already registered' });
        return;
    }
    const newUser = {
        firstName,
        lastName,
        email,
        dateOfBirth,
        password,
        gender
    };
    users.push(newUser);
    await (0, fileManager_1.saveUsers)(users);
    res.status(200).json({ message: 'Registration sucessful', data: newUser });
});
exports.default = router;
//# sourceMappingURL=register.js.map