import { generateToken } from "../utils/generateToken.js";
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if(!username || !email || !password) {
            return res.status(400).json({message: "Please fill all fields"});
        }
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({message: 'Please enter a valid email address'});
        }
        if(password.length < 6) {
            return res.status(400).json({message: "Password cannot be less than 6 characters"});
        }
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: "Email already exists"});
        }
        user = await User.findOne({username});
        if (user) {
            return res.status(400).json({message: "Username already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            username,
            email,
            password: hash
        });

        generateToken(newUser._id, res);
        
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email
        });

    } catch (error) {
        console.log("Error registering user: ", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if(!username || !password) {
            return res.status(400).json({message: "Please input all fields"});
        }
        
        const user = await User.findOne({username});
        if(!user) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"});
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email
        })
    } catch (error) {
        console.log("Error login in user: ", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

const ForgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if(!email) {
            return res.status(400).json({message: "Please input all fields"});
        }
        const user = await User.findOne({email});
        if(!user) {
            return res.status(400).json({message: "Invalid credentials"});
        }

    } catch (error) {
        console.log("Error sending verification email: ", error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export default { Register, Login, ForgotPassword }