"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete = exports.update = exports.login = exports.getUsers = exports.registration = void 0;
var register_1 = require("./register");
Object.defineProperty(exports, "registration", { enumerable: true, get: function () { return __importDefault(register_1).default; } });
var get_users_1 = require("./get-users");
Object.defineProperty(exports, "getUsers", { enumerable: true, get: function () { return __importDefault(get_users_1).default; } });
var login_1 = require("./login");
Object.defineProperty(exports, "login", { enumerable: true, get: function () { return __importDefault(login_1).default; } });
var update_1 = require("./update");
Object.defineProperty(exports, "update", { enumerable: true, get: function () { return __importDefault(update_1).default; } });
var delete_1 = require("./delete");
Object.defineProperty(exports, "delete", { enumerable: true, get: function () { return __importDefault(delete_1).default; } });
//# sourceMappingURL=index.js.map