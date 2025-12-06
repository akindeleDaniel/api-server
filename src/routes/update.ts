import { Router,Request,Response } from "express"
import { userModel } from "../db/users"
import { User } from "../interfaces"

const router = Router()

router.put('/update/:email',async(req:Request,res:Response)=>{
    const {email} = req.params
    const {firstName,lastName,password,gender,dateOfBirth} = req.body
const user = await userModel.findOne({email})

    if (!user){
        res.status(404).json({message:'User not found'})
    return }

    if(firstName) user.firstName=firstName
    if(lastName) user.lastName=lastName
    if(password) user.password=password
    if(dateOfBirth) user.dateOfBirth=dateOfBirth
    if(gender)user.gender=gender

        await user.save()
    
    res.status(200).json({message:'User updated successfully', user})
})

    export default router
