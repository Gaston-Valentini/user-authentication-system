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
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const User_1 = require("../entity/User");
const user = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.token;
        const user = yield User_1.User.findOneBy({ id: token.id });
        return res.status(200).json({
            success: true,
            user
        });
    }
    catch (error) {
        return res.status(500).json({
            success: true,
            error
        });
    }
});
exports.user = user;
