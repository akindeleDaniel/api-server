import { Request,Response,NextFunction } from "express";
// requestcounter
let requestCount = 0
export function requestCounter(req:Request, res:Response, next:NextFunction){
    requestCount++
    console.log(`Number of request: ${requestCount}`)
    next()
}