"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readUsers = readUsers;
exports.saveUsers = saveUsers;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../src/data/users.json");
async function readUsers() {
    const data = await promises_1.default.readFile(filePath, "utf-8");
    return JSON.parse(data);
}
async function saveUsers(users) {
    await promises_1.default.writeFile(filePath, JSON.stringify(users, null, 2));
}
//# sourceMappingURL=fileManager.js.map