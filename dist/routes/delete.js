"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileManager_1 = require("../fileManager");
const router = (0, express_1.Router)();
router.delete("/delete/:email", async (req, res) => {
    const { email } = req.params;
    const users = await (0, fileManager_1.readUsers)();
    const exists = users.some((u) => u.email === email);
    if (!exists) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    const updateUsers = users.filter((u) => u.email !== email);
    await (0, fileManager_1.saveUsers)(updateUsers);
    res.json({ message: 'User deleted successfully' });
});
exports.default = router;
//# sourceMappingURL=delete.js.map