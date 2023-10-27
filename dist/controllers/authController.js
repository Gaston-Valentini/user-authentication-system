"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = require("../entity/User");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nickname, email, password, phone } = req.body;
    try {
        const userFound = yield User_1.User.findOneBy({ email });
        if (userFound) {
            return res.status(200).json({
                success: true,
                message: "A user with that email address is already registered."
            });
        }
        const hashedPassword = bcrypt_1.default.hashSync(password, 10);
        const userRegistered = yield User_1.User.create({
            nickname,
            email,
            password: hashedPassword,
            phone
        }).save();
        return res.status(200).json({
            success: true,
            message: "User registered succesfully",
            userRegistered: {
                id: userRegistered.id,
                nickname: userRegistered.nickname,
                email: userRegistered.email,
                phone: userRegistered.phone
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.login = login;
