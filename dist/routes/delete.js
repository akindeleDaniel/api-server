"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../db/users");
const router = (0, express_1.Router)();
router.delete("/delete/:email", async (req, res) => {
    const { email } = req.params;
    const user = await users_1.userModel.findOneAndDelete({ email });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }
    res.json({ message: 'User deleted successfully' });
});
exports.default = router;
//# sourceMappingURL=delete.js.map