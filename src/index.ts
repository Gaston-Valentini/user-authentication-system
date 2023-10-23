import app from "./app/app"
import database from "./database/database"

const startApp = () => {
    // Database
    database.initialize()
    .then(() => {
        console.log("Conected to database")
        // Server
        app.listen(3000, () => {
            console.log("ready");
        })
    })
    .catch(error => console.log(error))
}

startApp()