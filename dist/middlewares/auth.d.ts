import { Request, Response, NextFunction } from "express";
export interface authRequest extends Request {
    user?: any;
}
declare function auth(req: authRequest, res: Response, next: NextFunction): void;
export default auth;
//# sourceMappingURL=auth.d.ts.map