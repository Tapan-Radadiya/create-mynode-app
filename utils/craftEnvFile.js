import fs from "fs-extra"
import validatePort from "./validatePort.js"
async function craftEnvFile(targetDir, mongodbUrl, mongoDbDatabaseName) {
    let envData
    let port

    await validatePort().then((freePort) => port = freePort).catch((err) => console.log(`Error ${err}`))
    if (mongodbUrl && mongoDbDatabaseName) {
        envData = `PORT=${port}\nMONGODB_URL=${mongodbUrl} \nMONGODB_DATABASE_NAME=${mongoDbDatabaseName}`
    }
    else {
        envData = `PORT=${port}`
    }
    await fs.writeFile(targetDir + "\\.env", envData, 'utf-8')
}
export default craftEnvFile