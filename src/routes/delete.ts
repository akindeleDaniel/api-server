import { Router,Response,Request } from "express"
import { readUsers, saveUsers } from "../fileManager"
import { User } from "../interfaces"

const router = Router()

router.delete("/delete/:email", async(req:Request,res:Response) => {
    const {email} = req.params
    
    const users = await readUsers()
    const exists = users.some((u:User) => u.email === email)
    if (!exists){
        res.status(404).json({message:'User not found'})
    return}

    const updateUsers = users.filter((u:User) => u.email !== email)

    await saveUsers(updateUsers)

    res.json({message:'User deleted successfully'})
})
export default router