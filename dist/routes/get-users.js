"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fileManager_1 = require("../fileManager");
const router = (0, express_1.Router)();
router.get('/users', async (req, res) => {
    const users = await (0, fileManager_1.readUsers)();
    res.json({ users });
});
exports.default = router;
//# sourceMappingURL=get-users.js.map