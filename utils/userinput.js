import inquirer from "inquirer";
import { validateProjectName } from "./validation.js";

const userInput = async () => {
    let userObject = {}


    const questions = [
        {
            type: 'input',
            name: "projectName",
            message: 'Enter Your Project Name > : ',
            validate: validateProjectName
        },
        {
            type: 'list',
            name: 'language',
            message: 'Please select your preferred programming language: ',
            choices: ['JavaScript', 'TypeScript'],
        },
        {
            type: 'list',
            name: 'templateType',
            message: 'Select a Node.js template: ',
            choices: ['Simple Node.js', 'Node.js with Mongoose'],
        }
    ];

    const userMongoDbQuestions = [
        {
            type: 'input',
            name: 'mongodbUrl',
            message: 'Enter your mongoDB URL: ',
        },
        {
            type: 'input',
            name: 'mongoDbDatabaseName',
            message: 'Enter your mongoDB database name: ',
        }
    ];

    try {
        const answers = await inquirer.prompt(questions);
        if (answers.templateType === "Node.js with Mongoose") {
            const mongoAnswers = await inquirer.prompt(userMongoDbQuestions);
            userObject.mongodbUrl = mongoAnswers.mongodbUrl
            userObject.mongoDbDatabaseName = mongoAnswers.mongoDbDatabaseName
        }
        userObject.language = answers.language
        userObject.templateType = answers.templateType
        userObject.projectName = answers.projectName
        return userObject
    } catch (error) {
        console.error('Error during selection:', error);
    }
}
export default userInput