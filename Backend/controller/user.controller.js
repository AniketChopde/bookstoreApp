import User from "../model/userr.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with hashed password
        const createdUser = new User({
            fullname,
            email,
            password: hashedPassword // Store hashed password here
        });

        // Save the user to the database
        await createdUser.save();
        res.status(201).json({ message: "User successfully created" ,user:{
            _id: createdUser._id,
            email: createdUser.email,
            password: createdUser.password
        }});
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if user exists and the password field exists
        if (!user || !user.password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare the plain text password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Successful login
        return res.status(200).json({
            message: "Login successfully",
            user: {
                _id: user._id,
                email: user.email,
                fullname: user.fullname
            }
        });
    } catch (error) {
        console.log("error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
