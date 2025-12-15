import express, {Response, Request, NextFunction} from 'express'
import dotenv from 'dotenv'
import mongoose  from 'mongoose'
import { logger,requestCounter } from './middlewares'
import {getUsers,registration,login,update,delete as delete_} from './routes'
dotenv.config()


const app = express()
const PORT = 3000
app.use(express.json())
const MONGO_URL = process.env.MONGO_URL
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
mongoose
.connect(MONGO_URL!)
.then(() => console.log('MongoDB connected'))
.catch((err:any)=> console.log("MongoDB Error:",err))

app.use(logger)     
app.use(requestCounter)
app.use(registration)
app.use(login)
app.use(update)              
app.use(delete_)
app.use(getUsers)

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
