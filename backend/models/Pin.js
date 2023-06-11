import mongoose from "mongoose";
const Schema = mongoose.Schema;
const pinSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 3 ,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true,
        min: 0,
        max: 5
    },
    rating: {
        type: Number,
        required: true,
        trim: true,
        min: 0, 
        max: 5
        
    },
    lat: {
        type: Number,
        required: true,
        trim: true
    },
    lon: {
        type: Number,
        required: true,
        trim: true
    }
}, {timestamps: true});

export default mongoose.model("Pin", pinSchema);