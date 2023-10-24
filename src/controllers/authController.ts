import { Request, Response } from "express"

const register = (req:Request, res:Response) => {
    return res.send("register")
}

const login = (req:Request, res:Response) => {
    return res.send("login")
}

export {
    register,
    login
}