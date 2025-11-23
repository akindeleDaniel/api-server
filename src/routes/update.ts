import { Router,Request,Response } from "express"
import { User } from "../interfaces"
import {hidePassword} from '../middlewares'
import { readUsers,saveUsers } from "../utils/fileManager"

const router = Router()

router.put('/update/:email',hidePassword, async(req:Request,res:Response)=>{
    try{
    const email= req.params.email

    const users: User[] = await readUsers()
    const userIndex = users.findIndex((u)=> u.email === email)
    if (userIndex === -1){
        res.status(400).json({message:'User not found'})
    return}

    const existingUser = users[userIndex]
    const {firstName,lastName,password,dateOfBirth,gender} =req.body

    if(firstName !== undefined) existingUser.firstName=firstName
    if(lastName !== undefined) existingUser.lastName=lastName
    if(password !== undefined) existingUser.password=password
    if(dateOfBirth !== undefined) existingUser.dateOfBirth=dateOfBirth
    if(gender !== undefined)existingUser?.gender=gender
    
    users[userIndex] = existingUser
    await saveUsers(users)
    
    res.status(200).json({message:'User updated successfully', user:existingUser})
} catch(error){
    res.status(500).json({message:'Error updating user'})
}

    })
