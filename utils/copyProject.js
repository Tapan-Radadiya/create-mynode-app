import fs from "fs-extra"
import craftEnvFile from "./craftEnvFile.js";
import notification from "./notification.js";
import { loaderEffect } from "./loader.js";
import { exec as execCommand } from "child_process";
import chalk from "chalk";
import util from "util"
const exec = util.promisify(execCommand)
async function craftNodeProject(template_dir, { targetDir, projectName, mongodbUrl, mongoDbDatabaseName }) {
    try {
        await notification(`Please wait while we craft your ${chalk.yellow.bold(projectName)} project`, 1000, 'blue')
        await fs.copy(template_dir, targetDir)
        await notification(`Your Project Is Almost Done Adding Final Touches `, 1000, 'green')
        if (mongodbUrl && mongoDbDatabaseName) {
            await craftEnvFile(targetDir, mongodbUrl, mongoDbDatabaseName)
        }
        else {
            await craftEnvFile(targetDir)
        }
        await notification(`Installing dependencies for your project`, 0, 'cyan')

        const stop = loaderEffect()

        const { stderr, stdout } = await exec(`cd ${projectName} && npm install --silent`);
        if (stderr == "" && stdout == "") {
            stop()
            await notification(`Project ${chalk.yellow.bold(projectName)} ready to launch 🚀`, "green")
            notification(`Run Following Command`, 0, 'greenBright')
            console.log(chalk.whiteBright(`    
----------------------------------------
|  cd ${projectName}                  
|  npm run dev                             
----------------------------------------
                    `));
        }
        else {
            console.log(chalk.redBright("Error Creating Your Project Please Try After SomeTime"))
        }
    } catch (error) {
        console.log(`Error Creating Project ${error}`);
    }
}
export {
    craftNodeProject,
}
