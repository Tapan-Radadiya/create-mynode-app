import express from "express"
import { Request, Response } from "express"
import "dotenv/config"

const app = express()

app.use("/", (req: Request, res: Response) => {
    res.send("Welcome You're The Great")
})

app.use("*", (req: Request, res: Response) => {
    res.send("Invalid Route")
})

export default app