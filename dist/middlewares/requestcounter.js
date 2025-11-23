"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestCounter = requestCounter;
// requestcounter
let requestCount = 0;
function requestCounter(req, res, next) {
    requestCount++;
    console.log(`Number of request: ${requestCount}`);
    next();
}
//# sourceMappingURL=requestcounter.js.map