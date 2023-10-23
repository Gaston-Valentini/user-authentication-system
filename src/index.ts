import app from "./app/app"
import database from "./database/database"

const startApp = () => {
    // Database
    database.initialize()
    .then(() => {
        console.log("Conected to database")
        // Server
        app.listen(app.get("SERVER_PORT"), () => {
            console.log(`Server listening on port ${app.get("SERVER_PORT")}`);
        })
    })
    .catch(error => console.log(error))
}

startApp()