// Imports
import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()

import authController from "../router/authController"
import userController from "../router/userController"

// Settings
app.set("SERVER_PORT", process.env.SERVER_PORT || 4000)
app.set("DB_HOST", process.env.DB_HOST)
app.set("DB_PORT", process.env.DB_PORT)
app.set("DB_USERNAME", process.env.DB_USERNAME)
app.set("DB_PASSWORD", process.env.DB_PASSWORD)
app.set("DB_NAME", process.env.DB_NAME)

// Middlewares
app.use(express.json())

// Router
app.use("/", authController)
app.use("/user", userController)

// Export
export default app