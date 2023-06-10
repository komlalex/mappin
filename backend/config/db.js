import mongoose from "mongoose";

const connectDb = async () => {
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mappin";
    try {
        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected: ${conn.connection.host}`.yellow.underline);
    } catch(err) {
        console.log(err.message);
        process.exit(1)
    }
}

export default connectDb;