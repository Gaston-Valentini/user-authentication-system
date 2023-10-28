"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(200).json({
                success: true,
                message: "Dont have token"
            });
        }
        const token = req.headers.authorization;
        if (!token) {
            return res.status(200).json({
                success: true,
                message: "Invalid token"
            });
        }
        const tokenDecoded = jsonwebtoken_1.default.verify(token, "secret");
        req.token = tokenDecoded;
        next();
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error
        });
    }
};
exports.default = auth;
