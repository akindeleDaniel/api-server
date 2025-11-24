import { Request,Response,NextFunction } from "express"

// Email format
export function validateEmail (req:Request,res:Response,next:NextFunction){
        const {email} = req.body
        if (!email) return next()
       const emailFormat= /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailFormat.test(email)){
            res.status(400).json({error:'Invalid email format'})
        return }
        next()
}

// Date of birth format

export function validationDOB  (req:Request,res:Response,next:NextFunction){
    const {dateOfBirth} = req.body
        const dobFormat = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
        if (!dobFormat.test(dateOfBirth)){
            res.status(400).json({error:'Invalid date of birth format'})
        return }

        const[day,month,year] = dateOfBirth.split("/").map(Number)

        if (day < 1 || day > 31 || month < 1 || month >12){
            res.status(400).json({error:'Please enter date of birth'})
        return }
        const birthDate = new Date(year,month - 1,day)

        if(
            birthDate.getFullYear() !== year ||
            birthDate.getMonth() !== month -1 ||
            birthDate.getDate () !== day
        ) {
            res.status(400).json({error: "Not a calendar date"})
        return }
        const today = new Date()
        let age = today.getFullYear() - birthDate.getFullYear()
        const actualMonth = today.getMonth() - birthDate.getMonth()
        if (actualMonth < 0 || (actualMonth === 0 && today.getDate() < birthDate.getDate())){
            age--
        }

        if (age > 120 || age < 12 || isNaN(age)){
            res.status(400).json({error: 'Inavlid date of birth'})
        return}
        next()
}

// Password validation


export function validatePassword (req:Request,res:Response,next:NextFunction){
    const{password} = req.body        
const passwordStrength =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{10,}$/
        if(!passwordStrength.test(password)){
            res.status(400).json({message: 'Password must be atleast 10 characters long and must include uppercase,lowercase,number, and special characters'})
        return}
        next()
}

// Gender check

export function genderCheck (req:Request,res:Response,next:NextFunction){
    const {gender} =req.body
            const genders = ["male", "female", "others"]
        if (!genders.includes(String(gender).toLowerCase())){
            res.status(400).json({message:"Gender must be male,female or others"})
        return}
}

// Parameters

export function Parameters (req:Request,res:Response,next:NextFunction){
    const {firstName,lastName,email,dateOfBirth,password,gender} = req.body

    if (!firstName||!lastName||!email||!dateOfBirth||!password||!gender){
       res.status(400).json({message:'All areas reqiured'})
return}
        next()
}
