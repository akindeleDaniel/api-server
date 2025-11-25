import fs from "fs/promises"
import path from "path"

const filePath = path.join(__dirname, "../src/data/users.json")


export async function readUsers(){
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data)
  }
  

export async function saveUsers(users: any[]) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2));
}
