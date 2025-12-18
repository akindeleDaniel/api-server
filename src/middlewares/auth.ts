import { Request,Response,NextFunction } from "express"
import jwt from "jsonwebtoken"

export interface authRequest extends Request{
    user?:any
}

function auth (req:authRequest,res:Response,next:NextFunction) {
    const authHeader =req.headers.authorization

    if (!authHeader){
        res.status(401).json({message:"No token provided"})
    return}
    const token =authHeader?.split("")[1]
    if (!token){
        res.status(400).json({message:"Invalid token provided"})
    return}
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET as string)
        req.user =decoded
        next()
    } catch (err){
        res.status(401).json({message:"Invalid token"})
    return}
}

export default auth 