import express from "express"
import "dotenv/config"

const app = express()

app.use("/", (req, res) => {
    res.send("Welcome You're The Great")
})

app.use("*", (req, res) => {
    res.send("Invalid Route")
})

export default app