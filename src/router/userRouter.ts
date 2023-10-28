import { Router } from "express"
import { user } from "../controllers/userControllers"
import auth from "../middlewares/auth"

const router = Router()

router.get("/", auth, user)

export default router