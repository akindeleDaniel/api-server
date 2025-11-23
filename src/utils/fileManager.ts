import fs from 'fs'
import path from 'path'

const filePath = path.join(__dirname, "../data/users.json")

export function readUsers(){
    if (!fs.existsSync(filePath)){
        []
    return}
    const data = fs.readFileSync(filePath,"utf-8")
    JSON.parse(data || "[]")
}

export function saveUsers(users: any[]){
    fs.writeFileSync(filePath,JSON.stringify(users,null,2))
}