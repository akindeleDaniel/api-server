import { Router,Request,Response } from "express"
import { userModel } from "../model/users"
const router = Router()
router.get('/users',async(req:Request,res:Response)=>{
    const users = await userModel.find()
    res.json({users})
})

export default router