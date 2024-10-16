import os from "os"
import fs from "fs-extra"

const validateProjectName = (projectName) => {
    const userOs = os.platform()
    let flag = false
    if (userOs === "win32") {
        flag = !/[<>:"/\\|?*]/.test(projectName)
    }
    else if (userOs === "linux") {
        flag = /^(?!\.)(?!.*[<>:"/\\|?*]).{1,255}$/.test(projectName)
    }
    if (flag) {
        if (!fs.existsSync(projectName)) {
            return true
        }
        else {
            return `Folder with name ${projectName} already exist`
        }
    }
    else {
        return `Please provide valid folder name`
    }
}

export { validateProjectName }