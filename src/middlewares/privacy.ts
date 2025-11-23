import bcrypt from 'bcrypt'
import { Request,Response,NextFunction } from 'express'

export const hidePassword = async(req:Request,res:Response,next:NextFunction)=> {
    const {password,hidePassword} = req.body
    if(!password) 
        return next()
    if (hidePassword === false)
        return next()

    const saltRounds = 10
    const hashed = await bcrypt.hash(password,saltRounds)
    req.body.password = hashed
    next()
}