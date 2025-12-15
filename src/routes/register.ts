import { Router,Request,Response } from "express"
import { Parameters,validateEmail,validatePassword,validationDOB,genderCheck} from "../middlewares"
import {User} from "../interfaces/user"
import { userModel } from "../db/users"
import bcrypt from "bcrypt"
const router = Router()

router.post('/register',
  Parameters,
  validateEmail,
  validatePassword,
  validationDOB,
  genderCheck,
  async(req:Request,res:Response)=>{
    const {firstName,lastName,email,dateOfBirth,password,gender} = req.body

 const exists = await userModel.findOne({ email })
    if (exists) {
      res.status(400).json({ message: "Email already registered" })
    return}

    const hidePassword = await bcrypt.hash(password,10)

        const newUser: User= await userModel.create ({
            firstName,
            lastName,
            email,
            dateOfBirth,
            password:hidePassword,
            gender
        })

        res.status(200).json({message:'Registration sucessful', data:newUser})
})

export default router
