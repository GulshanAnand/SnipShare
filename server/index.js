const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

const snipRouter = require("./routes/snip.js");
const userRouter = require("./routes/user.js");

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.use("/snip", snipRouter);
app.use("/auth", userRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

mongoose.connect(process.env.MONGO_URL + "/snipDB")
    .then(() => console.log('Connected Successfully'));

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});