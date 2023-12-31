import Jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = Jwt.verify(token, process.env.JWT_SECRET);

            req.User = await User.findById(decoded.userId).select("-password");

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not autherized, Invalid token");
        }
    } else {
        res.status(401);
        throw new Error("Not autherized, no token");
    }
});

export {protect};
