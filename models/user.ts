import mongoose, { Schema } from "mongoose"

const user = new Schema({
    clerkId: String,
    fullName: String,
    email: String,
    credits:{
        type:Number,
        default:5
    }
},
    {
        timestamps: true
    }
)

const userModel = mongoose.models.userModel || mongoose.model("userModel", user);

export default userModel;