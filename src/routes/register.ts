import { Router,Request,Response } from "express"
import { Parameters,validateEmail,validatePassword,validationDOB,genderCheck} from "../middlewares"
import {User} from "../interfaces/user"
import { readUsers,saveUsers } from "../fileManager"
const router = Router()


router.use(Parameters)
router.use(validateEmail)
router.use(validatePassword)
router.use(validationDOB)
router.use(genderCheck)


router.post('/register',Parameters,validateEmail,validatePassword,validationDOB,genderCheck,async(req:Request,res:Response)=>{
    const {firstName,lastName,email,dateOfBirth,password,gender} = req.body
    const users:User[] = await readUsers()

    const exists = users.find(u=>u.email === email)
    if(exists){
    res.status(400).json({message: 'Email already registered'})
    return}


        const newUser: User= {
            firstName,
            lastName,
            email,
            dateOfBirth,
            password,
            gender
        }

        users.push(newUser)
        await saveUsers(users)

        res.status(200).json({message:'Registration sucessful', data:newUser})
})

export default router
