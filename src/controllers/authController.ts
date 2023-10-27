import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

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

    try {
        
        const { email, password } = req.body

        const userFound = await User.findOneBy({email})
    
        if (!userFound) {
            return res.status(200).json({
                success: true,
                message: "There is no registered user with that email."
            })
        }
    
        const comparedPassword = bcrypt.compareSync(password, userFound.password)
    
        if (!comparedPassword) {
            return res.status(200).json({
                success: true,
                message: "Incorrect password."
            })
        }
        
        const token = jwt.sign(
            {
                id: userFound.id,
                email: userFound.email,
                role: userFound.role
            },
            "secret",
            {
                expiresIn: "24h"
            }
        )
    
        return res.status(200).json({
            success: true,
            message: "User logged succesfully",
            user: {
                nickname: userFound.nickname,
                email: userFound.email,
                phone: userFound.phone,
                token
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}

export {
    register,
    login
}