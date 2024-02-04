import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password || username === '' || email === '' || password === ''){
        next(errorHandler(400,'All fields are required'))
    }

    const hashedPassword = await bcryptjs.hash(password, 12);

    const newUser = new User({
        username,
        email,
        password:hashedPassword});

    try {
        const user = await newUser.save();
        return res.status(201).json({message: 'User created successfully', user});
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password || email === '' || password === ''){
        next(errorHandler(400,'All fields are required'))
    }

    try {
        const user = await User.findOne({email});
        if(!user){
            return next(errorHandler(400,'Invalid credentials'))
        }
        const isMatch = bcryptjs.compareSync(password, user.password);
        if(!isMatch){
            return next(errorHandler(400,'Invalid credentials'))
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:'1d'});

        const {password:hashedPassword, ...rest} = user._doc;

        return res.status(200).cookie('token', token, {httpOnly:true}).json({message: 'User signed in successfully', user:rest});
    } catch (error) {
        next(error);
    }
};