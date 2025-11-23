import { Request,Response,NextFunction } from "express";
// logger
export function logger (req:Request,res:Response, next: NextFunction){
    console.log(`${req.url} ${req.method}`)
    next()
}