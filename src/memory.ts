import express, {Response, Request, NextFunction} from 'express'
import { logger,requestCounter } from './middlewares'
import userRouter from "./routes/user"
import dotenv from 'dotenv'
import connect from './model/config'

dotenv.config()
connect()

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

const app = express()
const PORT = 3000
app.use(express.json())

app.use(logger)     
app.use(requestCounter)
app.use("/user", userRouter)

app.use((err:Error,req:Request,res:Response, next:NextFunction)=>{
    console.log(err.message)
    res.status(500).json({error:err.message})
    next()
}) 

app.get("/", (req:Request, res:Response)=>{
    res.json({ message:"Hello!" })
}) 

app.listen(PORT, () =>{
    console.log(`server running at http://localhost:${PORT}`)
})
