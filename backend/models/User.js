import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6
    }
}, {timestamps: true})

export default mongoose.model("User", userSchema);