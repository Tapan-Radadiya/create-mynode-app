import connectDb from "./config/connectDb.js"
import app from "./app.js"
import "dotenv"
const PORT = process.env.PORT || 8080

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server Ready With Port ${PORT} At http://localhost:${PORT}`);
        })
    }).catch((err) => {
        console.log(`Database Connection Fails ${err.message}`);
    })