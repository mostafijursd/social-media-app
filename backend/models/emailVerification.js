import mongoose, { Schema } from "mongoose";

const emailVerificationSchema = Schema({
    userId: String,
    token: String,
    createAt: Date,
    expiresAt: Date,
});


const Verification = mongoose.model("Verification", emailVerificationSchema);
export default Verification;