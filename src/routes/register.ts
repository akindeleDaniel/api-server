import { Router,Request,Response } from "express"
import { Parameters,validateEmail,validatePassword,validationDOB,genderCheck,emailExists} from "../middlewares"
import { User, users } from "../interfaces"
const router = Router()
router.use(Parameters)
router.use(validateEmail)
router.use(validatePassword)
router.use(validationDOB)
router.use(genderCheck)
router.use(emailExists)

router.post('/register',Parameters,validateEmail,validatePassword,validationDOB,genderCheck,emailExists,(req:Request,res:Response)=>{
    const {firstName,lastName,email,dateOfBirth,password,gender} = req.body


        const newUser: User= {
            firstName,
            lastName,
            email,
            dateOfBirth,
            password,
            gender
        }

        users.push(newUser)

        res.status(200).json({message:'Registration sucessful', data:newUser})
})

export default router
