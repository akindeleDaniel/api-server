"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const middlewares_1 = require("./middlewares");
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
const MONGO_URL = process.env.MONGO_URL;
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
mongoose_1.default
    .connect(MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log("MongoDB Error:", err));
app.use(middlewares_1.logger);
app.use(middlewares_1.requestCounter);
app.use(routes_1.registration);
app.use(routes_1.login);
app.use(routes_1.update);
app.use(routes_1.delete);
app.use(routes_1.getUsers);
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