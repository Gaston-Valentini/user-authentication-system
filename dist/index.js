"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app/app"));
const database_1 = __importDefault(require("./database/database"));
const startApp = () => {
    // Database
    database_1.default.initialize()
        .then(() => {
        console.log("Conected to database");
        // Server
        app_1.default.listen(3000, () => {
            console.log("ready");
        });
    })
        .catch(error => console.log(error));
};
startApp();
