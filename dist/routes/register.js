"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const interfaces_1 = require("../interfaces");
exports.router = (0, express_1.Router)();
exports.router.use(middlewares_1.Parameters);
exports.router.use(middlewares_1.validateEmail);
exports.router.use(middlewares_1.validatePassword);
exports.router.use(middlewares_1.validationDOB);
exports.router.use(middlewares_1.genderCheck);
exports.router.post('/register', middlewares_1.Parameters, middlewares_1.validateEmail, middlewares_1.validatePassword, middlewares_1.validationDOB, middlewares_1.genderCheck, (req, res) => {
    const { firstName, lastName, email, dateOfBirth, password, gender } = req.body;
    const newUser = {
        firstName,
        lastName,
        email,
        dateOfBirth,
        password,
        gender
    };
    interfaces_1.users.push(newUser);
    res.status(200).json({ message: 'Registration sucessful', data: newUser });
});
exports.default = exports.router;
//# sourceMappingURL=register.js.map