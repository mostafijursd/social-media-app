import Users from '../models/userModel.js';
import { hashString } from '../utils/index.js';
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