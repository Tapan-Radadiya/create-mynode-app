import chalk from "chalk"
import net from "net"

export default async function validatePort() {
    return new Promise((resolve, reject) => {
        let freePort = 3000

        const checkIsAvailablePort = () => {
            const server = net.createServer()

            if (freePort >= 3005) {
                console.log(chalk.redBright(`Port Unavailable: All ports from 3000 to 3004 are currently in use. 
Please free up one of these ports and try again.`));
                resolve(freePort)
            }

            server.once("error", () => {
                console.log("Current port", freePort)
                console.log(chalk.red(`Port ${freePort} Is Occupied Trying ${freePort + 1}`))
                freePort += 1
                setTimeout(() => {
                    checkIsAvailablePort()
                }, 700)
            })
            server.once("listening", () => {
                server.close()
                resolve(freePort)
            })
            server.listen(freePort)
        }
        checkIsAvailablePort()
    })
}