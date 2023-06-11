import express from "express";
import Pin from "../models/Pin.js";

const router = express.Router();

// Create a pin
router.post("/", async (req, res) => {
    const {username, title, desc, rating, lat, lon} = req.body;

    // Ensure all required fields are provided
        if (!username || !desc || !lat || !lon || !title  || !rating) {
            res.status(401).json("Fill all fields and try again")
            return;
        }

    try {
        const newPin = new Pin({username, title, desc, rating, lat, lon});
        const savedPin = await newPin.save();
        res.status(201).json(savedPin);
    } catch (err) {
        res.status(500).json(err.message)
    }   
 })
     
//Get all pins
router.get("/", async (req, res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err.message)
    }
});


export default router;