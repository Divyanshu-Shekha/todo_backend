import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    topic : {
        type : String,
        require: true
    },
    tododata : String
})

export const User = mongoose.model('User',userSchema)