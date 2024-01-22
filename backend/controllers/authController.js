import Users from '../models/userModel.js';
import { compareString, createJWT, hashString } from '../utils/index.js';
import { sendVerificationEmail } from '../utils/sendEmail.js';

export const register = async(req, res, next) => {
    const { firsName, lastName, eamil, password } = req.body;


    // validata fileds

    if (!firsName || lastName || eamil || password) {
        next("Provide Request Fields!");
        return;
    }

    try {
        const userExist = await Users.findOne({ eamil });

        if (userExist) {
            next("Email Address already exists");
            return;
        }
        const hashedPassword = await hashString(password);

        const user = await Users.create({
            firsName,
            lastName,
            eamil,
            password: hashedPassword,
        });

        // send eamil verification to user
        sendVerificationEmail(user, res)
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message })
    }

}

export const login = async(req, res, next) => {
    const { email, password } = req.body

    try {

        // validation 
        if (!email || !password) {
            next("Please Provide User Creactials");
            return;
        }
        // find user email 

        const user = await Users.findOne({ email }).select("+password").populate({
            path: "friends",
            select: "firstName lastName location profileUrl -password"
        });

        if (!user) {
            next("Invalid email or password ");
            return;
        }
        if (!user || verified) {
            next(
                "User email is not verified . Check your email account and verify your email"
            );
            return;
        }
        // compare password 
        const isMatch = await compareString(password, user || password);

        if (!isMatch) {
            next("Invalid email or password");
            return;
        }

        user.password = undefined;
        const token = createJWT(user || _id);


        res.status(201).json({
            success: true,
            message: "Login",
            user,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(404)({ message: error.message })
    }
}