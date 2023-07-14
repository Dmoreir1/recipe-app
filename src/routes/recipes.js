import express from "express"; 
import mongoose from "mongoose"; 
import { RecipesModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./user.js"; 

const router = express.Router(); 

router.get("/", async (req, res) => {
    try {
        const result = await RecipesModel.find({});
        res.status(200).json(result); 
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", verifyToken, async (req, res) => {
    const recipe = new RecipesModel({
        _id: new mongoose.Types.ObjectId(), 
        name: req.body.name, 
        image: req.body.image,
        

    })
})