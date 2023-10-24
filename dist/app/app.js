"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authController_1 = __importDefault(require("../router/authController"));
const userController_1 = __importDefault(require("../router/userController"));
// Settings
app.set("SERVER_PORT", process.env.SERVER_PORT || 4000);
app.set("DB_HOST", process.env.DB_HOST);
app.set("DB_PORT", process.env.DB_PORT);
app.set("DB_USERNAME", process.env.DB_USERNAME);
app.set("DB_PASSWORD", process.env.DB_PASSWORD);
app.set("DB_NAME", process.env.DB_NAME);
// Middlewares
app.use(express_1.default.json());
// Router
app.use("/", authController_1.default);
app.use("/user", userController_1.default);
// Export
exports.default = app;
