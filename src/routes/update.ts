import { Router,Request,Response } from "express"
import { userModel } from "../model/users"
import auth from "../middlewares/auth"
import bcrypt from "bcrypt"

const router = Router()

router.put('/update/:email',auth,async(req:Request,res:Response)=>{
    const {email} = req.params
        if(!email){
        res.status(400).json({message:"Email not found"})
    return}
    const {firstName,lastName,password,gender,dateOfBirth} = req.body
const user = await userModel.findOne({email})

    if (!user){
        res.status(404).json({message:'User not found'})
    return }

    if(firstName) user.firstName=firstName
    if(lastName) user.lastName=lastName
    if(dateOfBirth) user.dateOfBirth=dateOfBirth
    if(gender)user.gender=gender

    if (password){
        const hidden = await bcrypt.hash(password, 10)
        user.password = hidden
    }
        await user.save()
    const userObject = user.toObject()
    const {password:_, ...safeUser} = userObject
    res.status(200).json({message:'User updated successfully', user:safeUser
    })
})

    export default router
