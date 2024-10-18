import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connectionStatus = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.MONGODB_DATABASE_NAME}`)
        if (connectionStatus.connection.host) {
            console.log(`DB Connected With ${connectionStatus.connection.host}`);
        }
        else {
            console.log(`Unable To Connect With DB Check Your MongoURL`);
        }
    } catch (error) {
        console.log(`Error Connecting With DB ${error}`);
    }
}
export default connectDb