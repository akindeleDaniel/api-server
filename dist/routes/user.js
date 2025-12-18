"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_1 = __importDefault(require("./register"));
const login_1 = __importDefault(require("./login"));
const update_1 = __importDefault(require("./update"));
const delete_1 = __importDefault(require("./delete"));
const get_users_1 = __importDefault(require("./get-users"));
const router = (0, express_1.Router)();
router.use(register_1.default);
router.use(login_1.default);
router.use(update_1.default);
router.use(delete_1.default);
router.use(get_users_1.default);
exports.default = router;
//# sourceMappingURL=user.js.map