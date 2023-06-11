import mongoose from "mongoose";
const Schema = mongoose.Schema;
const pinSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 3
    },
    description: {
        type: String,
        required: true,
        min: 0,
        max: 5
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    }
}, {timestamps: true});

export default mongoose.model("Pin", pinSchema);