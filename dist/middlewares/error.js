"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = error;
function error(err, req, res, next) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
    next();
}
//# sourceMappingURL=error.js.map