import connectDb from "./config/connectDb"
import app from "./app"
import "dotenv/config"
const PORT = process.env.PORT || 8080

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`🚀 Server Ready With Port ${PORT} At http://localhost:${PORT}`);
        })
    }).catch((err) => {
        console.log(`Database Connection Fails ${err.message}`);
    })