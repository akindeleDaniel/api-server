"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const middlewares_1 = require("./middlewares");
const user_1 = __importDefault(require("./routes/user"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./model/config"));
dotenv_1.default.config();
(0, config_1.default)();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(middlewares_1.logger);
app.use(middlewares_1.requestCounter);
app.use("/user", user_1.default);
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    next();
});
app.get("/", (req, res) => {
    res.json({ message: "Hello!" });
});
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=memory.js.map