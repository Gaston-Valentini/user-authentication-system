import { Request, Response, NextFunction } from "express"
import {TokenDecoded} from "../types/index"
import jwt from "jsonwebtoken"

const auth = (req:Request, res:Response, next:NextFunction) => {

    try {

        if (!req.headers.authorization) {
            return res.status(200).json({
                success: true,
                message: "Dont have token"
            })
        }
    
        const token = req.headers.authorization
    
        if (!token) {
            return res.status(200).json({
                success: true,
                message: "Invalid token"
            })
        }
    
        const tokenDecoded = jwt.verify(token, "secret") as TokenDecoded
    
        req.token = tokenDecoded
        
        next()
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }

}

export default auth