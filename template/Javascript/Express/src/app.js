import express from "express"
import "dotenv/config"

const PORT = process.env.PORT || 8080
const app = express()


app.use("/", (req, res) => {
    res.end("Hello World")
})

app.use("*", (req, res) => {
    res.send("Invalid Route")
})
app.listen(PORT, () => {
    console.log(`🚀 Server Ready With Port ${PORT} At http://localhost:${PORT}`);
})