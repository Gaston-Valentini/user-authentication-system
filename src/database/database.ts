import "reflect-metadata"
import { DataSource } from "typeorm"
import app from "../app/app"

import { User1698141918293 } from "../migration/1698141918293-user"

const database = new DataSource({
    type: "mysql",
    host: app.get("DB_HOST"),
    port: app.get("DB_PORT"),
    username: app.get("DB_USERNAME"),
    password: app.get("DB_PASSWORD"),
    database: app.get("DB_NAME"),
    migrations: [User1698141918293],
    entities: [],
    synchronize: false,
    logging: false,
})

export default database