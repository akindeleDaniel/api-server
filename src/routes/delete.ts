import { Router,Response,Request } from "express"
import { userModel } from "../db/users"

const router = Router()

router.delete("/delete/:email", async(req:Request,res:Response) => {
    const {email} = req.params
    
    const user = await userModel.findOneAndDelete({email})
    if (!user){
        res.status(404).json({message:'User not found'})
    return}

    res.json({message:'User deleted successfully'})
})
export default router