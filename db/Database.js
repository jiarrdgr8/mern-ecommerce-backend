import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.ONLINE_CONNECTION_STRING)
        
        console.log(
            'Database connected: ',
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
