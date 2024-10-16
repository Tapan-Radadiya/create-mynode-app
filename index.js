#!/usr/bin/env node

import { fileURLToPath } from 'url';
import { join, dirname } from "path"
import userInput from './utils/userinput.js';
import craftProject from './utils/craftProject.js';

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = dirname(__filename)

const template_dir = join(__dirname, 'template')

async function createApp() {
    const userSelection = await userInput()
    const targetDir = join(process.cwd(), userSelection.projectName)
    await craftProject({ userSelection, template_dir, targetDir })
}

createApp()