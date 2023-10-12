import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    //Encrypt password stroed in MongoDB as a Hash
    const hashedPassword = bcryptjs.hashSync(password, 10);
    
    //use created model to saveinformation above
    const newUser = new User ({username, email, password:hashedPassword}) //User imported from user.model.js
    
    try {
        await newUser.save() //save to the database
        res.status(201).json("User created successfully"); //staus 201 means something is being created
        
    } catch (error) {
        next(error); //call the error middleware created in index.js
    }
    
};