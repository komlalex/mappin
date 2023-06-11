import express from "express";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import User from "../models/User.js"
const router = express.Router();
const jwt = jsonwebtoken;

// Register
router.post("/register", async (req, res) => {
    const {username, password, email} = req.body;

    try {
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({username, password: hashedPassword, email});
        const savedUser = await newUser.save();
        
        if (savedUser) {
            return res.status(201).json(savedUser);
        }
        
    } catch (err) {
        res.status(500).json(err.message);
    }
})

// Login
router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    
    try {
        // Check if user exists
        const user = await User.findOne({email: email});

        if (!user) return res.status(400).json("Wrong email or password");
        const validPassword = await bcryptjs.compare(password, user.password);
        
        if (user && validPassword) {
            res.status(200).json({
                _id: user._id,
                username: user.username,
                email: user.email,
                token: generateToken(user._id)
            }) 
        } else {
            res.status(400).json("Wrong email or password");
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
            stack: process.env.NODE_ENV === "production" ? null : err.stack
        })
    }     
})

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"});
}

export default router;