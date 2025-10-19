import mongoose from "mongoose";

let connected = false;

const dbConnection = async () => {
    mongoose.set('strictQuery', true);
    if (connected) {
        console.log('Already connected to MongoDB');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('db connected successfully')
        connected = true;
    } catch (error) {
        console.log('Error on DB connection:', error);
        process.exit(1);
    }
};

export default dbConnection;