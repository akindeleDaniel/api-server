import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    dateOfBirth: {type:String, required:true},
    gender: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password:{type:String, required:true,select:false},

})

export const userModel = mongoose.model('User', userSchema)
