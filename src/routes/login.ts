import { Router,Request,Response } from "express"
import { users } from "../interfaces"
import bcrypt from "bcrypt"


const router = Router()

router.post('/login', async(req:Request,res:Response) =>{
    const {email,password} = req.body
    if(!email || !password){
        res.status(400).json({message:'Email and password required'})
    return}

    const user =users.find(u => u.email === email)
    if (!user){
        res.status(400).json({message:'Invalid email or password'})
    return}

    const passwordMatch = await bcrypt.compare(password,user.password)
    if (!passwordMatch){
        res.status(400).json({message:'Invalid email or password'})
    return }
    res.status(200).json({message:'Login successful', user:{
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email
        }
    })

    
})
export default router