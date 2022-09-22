import mongoose from 'mongoose';
const MONGO_URL = process.env.MONGO_URL

const connectMongo = async () => {
    try{

        const { connection }  = await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;