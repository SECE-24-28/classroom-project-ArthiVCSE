import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const signUpSchema = mongoose.Schema(
    {
        name: { type: String, require: true },
        email: { type: String, require: true, unique: true },
        password: { type: String, require: true },
        role: { type: String, default: 'public' } // Added role field with default 'public'
    }
)





const users = mongoose.model("signups", signUpSchema)
export default users
