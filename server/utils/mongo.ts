import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
export async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('Database connection established.');
        return true;
    } catch (error: any) {
        console.log(error.message);

        console.log('Failed to establish connection to database..');
        process.exit(1);
    }
}
