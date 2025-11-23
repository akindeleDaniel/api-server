"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = authorization;
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
const register_1 = require("./routes/register");
const get_users_1 = require("./routes/get-users");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(middlewares_1.logger);
app.use(middlewares_1.requestCounter);
app.use(register_1.router);
app.use(get_users_1.getUsers);
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    next();
});
// authorization
function authorization(req, res, next) {
    const apiKey = req.headers["x-api-key"];
    if (apiKey !== "12345") {
        return res.status(401).json({ error: "Unauthorized" });
    }
    return next();
}
app.get("/", (req, res) => {
    res.json({ message: "Hello!" });
});
app.get('/secret', authorization, (req, res) => {
    res.json({ message: 'Secret unlocked' });
});
app.get('/profile', middlewares_1.logger, authorization, (req, res) => {
    res.json({ Name: 'Danny', Role: 'Admin' });
});
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=memory.js.map