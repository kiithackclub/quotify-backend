const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {type: String, lowercase: true, unique: true, required: [true, "Username Can't be Empty!"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
        password: {type: String, required: true},
        date: {
            type:String,
            default:Date.now
        }
    }
);

const user = mongoose.model("users", userSchema);
module.exports = user;