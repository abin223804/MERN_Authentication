import asyncHandler from "express-async-handler";
import generateToken from '../util/generateToken.js'
import User from "../models/userModel.js";

const authUser = asyncHandler(async (req, res) => {
    
const{email,password}=req.body

});

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password} = req.body;
    const userExist = await User.findOne({email});
    if (userExist) {
        res.status(400);
        throw new Error("User already Exist");
    }
    const user = await User.create({
        name,
        email,
        password,
    });
    if (user) {
        generateToken(res,user._id) ;
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid User data");
    }
});

const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "logout User"});
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: "User profile"});
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: " Update User profile"});
});

export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile};
