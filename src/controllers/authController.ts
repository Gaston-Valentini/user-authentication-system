import { Request, Response } from "express"
import bcrypt from "bcrypt"

import { User } from "../entity/User"

const register = async (req:Request, res:Response) => {

    const { nickname, email, password, phone } = req.body
    
    try {

        const userFound = await User.findOneBy({email})

        if (userFound) {
            return res.status(200).json({
                success: true,
                message: "A user with that email address is already registered."
            })
        }

        const hashedPassword = bcrypt.hashSync(password, 10)

        const userRegistered = await User.create({
            nickname,
            email,
            password: hashedPassword,
            phone
        }).save()

        return res.status(200).json({
            success: true,
            message: "User registered succesfully",
            userRegistered: {
                id: userRegistered.id,
                nickname: userRegistered.nickname,
                email: userRegistered.email,
                phone: userRegistered.phone
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}

const login = async (req:Request, res:Response) => {

}

export {
    register,
    login
}