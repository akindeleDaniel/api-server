import mongoose from "mongoose"

const connect = async() => {
    try{
        const MONGO_URL = process.env.MONGO_URL
        if(!MONGO_URL){
            throw new Error("MONGO_URL is not defined")
        }
        await mongoose.connect(MONGO_URL)
        console.log("MongoDB connected")
    }catch(err){
        console.error("MongoDB connection error:", err)
        process.exit(1)
    }
}

export default connect