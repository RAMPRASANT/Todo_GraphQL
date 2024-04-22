import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    heading: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true,
})

const Task = mongoose.model('Task', TaskSchema)

export default Task;