import mongoose from "mongoose";

const appoint = mongoose.Schema({
    starttime: {
        type: String,
        required: true
    },
    endtime: {
        type: String,
        required: true
    },
    isbooked: {
        type: String,
        required: true
    }
})

export const schedule = mongoose.model('schedule', appoint)