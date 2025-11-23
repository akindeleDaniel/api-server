"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hidePassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const hidePassword = async (req, res, next) => {
    const { password, hidePassword } = req.body;
    if (!password)
        return next();
    if (hidePassword === false)
        return next();
    const saltRounds = 10;
    const hashed = await bcrypt_1.default.hash(password, saltRounds);
    req.body.password = hashed;
    next();
};
exports.hidePassword = hidePassword;
//# sourceMappingURL=privacy.js.map