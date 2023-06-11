import jsonwebtoken from "jsonwebtoken";
import User from "../models/User.js";
const jwt = jsonwebtoken;

const authenticate = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //Get user
            const user = await User.findById(decoded.id).select("-password");
            if (user) {
                req.user = user;
                next();
            }
        } catch (err) {
            res.status(500).json({
                message: err.message,
                stack: process.env.NODE_ENV === "production" ? null : err.stack
            });
        }
        
    } 

    if (!token) {
        res.status(401).json("Unauthorized. Please log in first.")
    }
}

export {authenticate};