import mongoose from 'mongoose';

type ConnectinObject = {
    isConnected?: number;
}

const connection: ConnectinObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected){
        consle.log('Using existing connection');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{ useNewUrlParser: true, useUnifiedTopology: true }); 
        consle.log(db);

        connection.isConnected = db.connections[0].readyState;
        console.log('db connected successfully'); 
    } catch (error) {
        console.log('Error when connecting to db: ', error);
        process.exit(1);
    }

}

export default dbConnect;