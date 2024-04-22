import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

userSchema.virtual('Task', {
    ref: 'Task',
    localField: 'id',
    foreignField: 'createdBy',
})

userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next();
})

userSchema.methods.login = async function () {
    const user = this;
}

export default User;