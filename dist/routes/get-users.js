"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../db/users");
const router = (0, express_1.Router)();
router.get('/users', async (req, res) => {
    const users = await users_1.userModel.find();
    res.json({ users });
});
exports.default = router;
//# sourceMappingURL=get-users.js.map