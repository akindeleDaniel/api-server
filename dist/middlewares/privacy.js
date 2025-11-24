"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hidePassword = hidePassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
async function hidePassword(req, res, next) {
    if (!req.body.password)
        return next();
    req.body.password = await bcrypt_1.default.hash(req.body.password, 10);
    next();
}
//# sourceMappingURL=privacy.js.map