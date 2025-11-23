import { Request, Response, NextFunction } from "express";
export declare function validateUsers(req: Request, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
export declare function validateEmail(req: Request, res: Response, next: NextFunction): void;
export declare function validationDOB(req: Request, res: Response, next: NextFunction): void;
export declare function validatePassword(req: Request, res: Response, next: NextFunction): void;
export declare function genderCheck(req: Request, res: Response, next: NextFunction): void;
export declare function Parameters(req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=validation.d.ts.map