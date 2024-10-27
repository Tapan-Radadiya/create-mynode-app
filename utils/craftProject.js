import {
    craftNodeProject
} from "../utils/copyProject.js"

import path from "path"

const craftProject = async ({
    userSelection: { language, templateType, projectName, mongodbUrl, mongoDbDatabaseName },
    template_dir, targetDir
}) => {

    const option = {
        targetDir: targetDir,
        projectName: projectName,
        mongodbUrl: mongodbUrl,
        mongoDbDatabaseName: mongoDbDatabaseName,
    }

    switch (true) {
        case (language === "JavaScript" && templateType === "Simple Node.js"):
            craftNodeProject(path.join(template_dir, "Javascript", "Express"), option)
            break
        case (language === "JavaScript" && templateType === "Node.js with Mongoose"):
            craftNodeProject(path.join(template_dir, "Javascript", "ExpressWithMongoose"), option)
            break
        case (language === "TypeScript" && templateType === "Simple Node.js"):
            craftNodeProject(path.join(template_dir, "Typescript", "Express"), option)
            break
        case (language === "TypeScript" && templateType === "Node.js with Mongoose"):
            craftNodeProject(path.join(template_dir, "Typescript", "ExpressWithMongoose"), option)
            break
        default:
            break
    }
}
export default craftProject