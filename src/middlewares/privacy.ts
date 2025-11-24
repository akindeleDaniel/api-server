import bcrypt from 'bcrypt'
import { Request,Response,NextFunction } from 'express'

export async function hidePassword(req:Request,res:Response,next:NextFunction) {
if(!req.body.password)return next()
req.body.password = await
bcrypt.hash(req.body.password, 10)
next()
}