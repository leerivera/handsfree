const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    dictation: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})