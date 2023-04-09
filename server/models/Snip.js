const mongoose = require("mongoose");

const SnipSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    snip: {
        type: String,
        required: true,
    },
    alias: {
        type: String,
        required: true,
        unique: true
    }
});

const SnipModel = mongoose.model("snips", SnipSchema);
module.exports = SnipModel;