"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = authorization;
// authorization
function authorization(req, res, next) {
    const apiKey = req.headers["x-api-key"];
    if (apiKey !== "12345") {
        return res.status(401).json({ error: "Unauthorized" });
    }
    return next();
}
//# sourceMappingURL=authorization.js.map