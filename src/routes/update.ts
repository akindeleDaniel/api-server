import { Router,Request,Response } from "express"
import { readUsers, saveUsers } from "../fileManager"
import { User } from "../interfaces"

const router = Router()

router.put('/update/:email',async(req:Request,res:Response)=>{
    const {email} = req.params
    const {firstName,lastName,password,gender,dateOfBirth} = req.body
const users = await readUsers()
const userIndex = users.findIndex((u:User)=>u.email === email)

    if (userIndex === -1){
        res.status(404).json({message:'User not found'})
    return }

    const user = users[userIndex]

    if(firstName) user.firstName=firstName
    if(lastName) user.lastName=lastName
    if(password) user.password=password
    if(dateOfBirth) user.dateOfBirth=dateOfBirth
    if(gender)user.gender=gender

    users[userIndex] = user
    await saveUsers(users)
    
    res.status(200).json({message:'User updated successfully', user})
})

    export default router
