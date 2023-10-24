import { Request, Response } from "express";

const user = (req: Request, res: Response) =>{
    return res.send("user")
}

export {
    user
}