import { Router } from "express"
import register from "./register"
import login from "./login"
import update from "./update"
import deleteUser from "./delete"
import getUsers from "./get-users"

const router = Router()

router.use(register)
router.use(login)
router.use(update)
router.use(deleteUser)
router.use(getUsers)

export default router