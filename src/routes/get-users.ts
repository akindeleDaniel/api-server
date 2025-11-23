import { Router,Request,Response } from "express"
import {users} from "../interfaces"
const router = Router()
router.get('/users',(req:Request,res:Response)=>{
    res.json({count:users.length,users: users})
})

export default router