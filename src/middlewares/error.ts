import { Request,Response,NextFunction } from "express";
export function error(err:Error,req:Request,res:Response, next:NextFunction){
    console.log(err.message)
    res.status(500).json({error:err.message})
    next()
}