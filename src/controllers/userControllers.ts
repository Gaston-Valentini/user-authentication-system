import { Request, Response } from "express"
import { User } from "../entity/User"

const user = async (req: Request, res: Response) =>{
    
    try {
        
        const token = req.token

        const user = await User.findOneBy({id: token.id})

        return res.status(200).json({
            success: true,
            user
        })

    } catch (error) {
        return res.status(500).json({
            success: true,
            error
        })
    }

}

export {
    user
}