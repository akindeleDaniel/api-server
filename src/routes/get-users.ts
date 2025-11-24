import { Router,Request,Response } from "express"
import { readUsers } from "../fileManager"
const router = Router()
router.get('/users',async(req:Request,res:Response)=>{
    const users = await readUsers()
    res.json({users})
})

export default router