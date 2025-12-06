"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../db/users");
const router = (0, express_1.Router)();
router.put('/update/:email', async (req, res) => {
    const { email } = req.params;
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
    if (password)
        user.password = password;
    if (dateOfBirth)
        user.dateOfBirth = dateOfBirth;
    if (gender)
        user.gender = gender;
    await user.save();
    res.status(200).json({ message: 'User updated successfully', user });
});
exports.default = router;
//# sourceMappingURL=update.js.map