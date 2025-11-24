"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const fileManager_1 = require("../fileManager");
const router = (0, express_1.Router)();
router.put('/update/:email', middlewares_1.hidePassword, async (req, res) => {
    const { email } = req.params;
    const { firstName, lastName, password, gender, dateOfBirth } = req.body;
    const users = await (0, fileManager_1.readUsers)();
    const userIndex = users.findIndex((u) => u.email === email);
    if (userIndex === -1) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    const user = users[userIndex];
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
    users[userIndex] = user;
    await (0, fileManager_1.saveUsers)(users);
    res.status(200).json({ message: 'User updated successfully', user });
});
exports.default = router;
//# sourceMappingURL=update.js.map