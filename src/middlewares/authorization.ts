import { Request,Response,NextFunction } from "express";
// authorization
export function authorization(req:Request,res:Response,next:NextFunction){
    const apiKey = req.headers["x-api-key"]
    if (apiKey !== "12345"){
        return res.status(401).json({error:"Unauthorized"})
    }
    return next()
}