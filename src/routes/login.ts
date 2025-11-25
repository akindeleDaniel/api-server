import { Router, Request, Response } from "express"
import { readUsers } from "../fileManager"
import { User } from "../interfaces"

const router = Router()

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body
  const users = await readUsers()
  const user = users.find((u: User) => u.email === email)

  if (!user) {
    res.status(400).json({ message: "User not found" })
 return  }

  if (user.password !== password) {
   res.status(400).json({ message: "Invalid email or password" })
 return  }

  res.status(200).json({ message: "Login successful", user })
})

export default router
