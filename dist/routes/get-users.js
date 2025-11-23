"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const express_1 = require("express");
const interfaces_1 = require("../interfaces");
exports.getUsers = (0, express_1.Router)();
exports.getUsers.get('/users', (req, res) => {
    res.json({ count: interfaces_1.users.length, users: interfaces_1.users });
});
exports.default = exports.getUsers;
//# sourceMappingURL=get-users.js.map