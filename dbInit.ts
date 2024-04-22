import mongoose from "mongoose"


const dbInit = async () =>{
    try {
        if(process.env.MONGODB_URL){
            await mongoose.connect(process.env.MONGODB_URL);
            console.log("MongoDb connected")
        } else{
            throw new Error("fail to connect mongodb")
        }

    } catch (error) {
        console.log(error)
    }
}

export default dbInit;