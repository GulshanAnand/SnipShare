const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    snips: [{ type: mongoose.Schema.Types.ObjectId, ref: "snips" }]
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;