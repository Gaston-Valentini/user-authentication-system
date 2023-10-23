"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const database = new typeorm_1.DataSource({
    type: "mysql",
    host: "",
    port: 0,
    username: "",
    password: "",
    database: "",
    entities: [],
    synchronize: false,
    logging: false,
});
exports.default = database;
