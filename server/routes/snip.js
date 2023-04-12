const express = require("express");

const SnipModel = require("../models/Snip.js");

const router = express.Router();

router.get("/", async (req, res) => {
    const snipList = await SnipModel.find({});
    res.json(snipList);
});

router.get("/:id", async (req, res) => {
    const snip = await SnipModel.findOne({alias:req.params.id});
    res.json(snip);
});

router.post("/", async (req, res) => {
    const newSnip = new SnipModel(req.body);
    if(!req.body.alias){
        
    }
    try{
        const savedSnip = await newSnip.save();
        console.log(savedSnip);
        return res.json({message: "Snip added successfully", id: savedSnip.alias});
    }
    catch(err){
        console.log(err);
    }
    res.json({message: "Something went wrong"});
});

// router.put("/", async (req, res) => {
//     const product = await ProductModel.findById(req.body.productID);
//     const user = await UserModel.findById(req.body.userID);
//     user.cart.push(product);
//     await user.save();
//     res.json({Cart: user.cart});
// });

module.exports = router;