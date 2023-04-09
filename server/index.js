const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

const app = express();
app.use(cors());
app.use(express.json());

const snipRouter = require("./routes/snip.js");

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use("/snip", snipRouter);

mongoose.connect("mongodb://127.0.0.1:27017/snipDB").then(() => console.log('Connected Successfully')); // use environment variable (env) for url

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});