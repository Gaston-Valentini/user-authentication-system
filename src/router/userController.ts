import { Router } from "express"
import { user } from "../controllers/userControllers"

const router = Router()

router.get("/", user)

export default router