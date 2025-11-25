import express, {Response, Request, NextFunction} from 'express'
import { logger,requestCounter } from './middlewares'
import {getUsers,registration,login,update,delete as delete_} from './routes'


const app = express()
const PORT = 3000
app.use(express.json())

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
