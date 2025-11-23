"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
// logger
function logger(req, res, next) {
    console.log(`${req.url} ${req.method}`);
    next();
}
//# sourceMappingURL=log.js.map