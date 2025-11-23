import express, {Response, Request, NextFunction} from 'express'
import { logger,requestCounter } from './middlewares'
import {getUsers,registration,login} from './routes'


const app = express()
const PORT = 3000
app.use(express.json())

app.use(logger)     
app.use(requestCounter)
app.use('./register', registration)
app.use('./get-users',getUsers)
app.use('./login', login)




app.use((err:Error,req:Request,res:Response, next:NextFunction)=>{
    console.log(err.message)
    res.status(500).json({error:err.message})
    next()
}) 

// authorization
export function authorization(req:Request,res:Response,next:NextFunction){
    const apiKey = req.headers["x-api-key"]
    if (apiKey !== "12345"){
        return res.status(401).json({error:"Unauthorized"})
    }
    return next()
}

app.get("/", (req:Request, res:Response)=>{
    res.json({ message:"Hello!" })
}) 

app.get('/secret', authorization, (req:Request, res:Response) =>{
    res.json({ message:'Secret unlocked'})
})

app.get('/profile',logger,authorization,(req:Request,res:Response)=>{
    res.json({Name: 'Danny',Role: 'Admin'})
})


app.listen(PORT, () =>{
    console.log(`server running at http://localhost:${PORT}`)
})
