import express from "express";
// import userModel from "../models/user.Model.js";
import userModel from "../modles/user.Model.js"


const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.create({ username, email, password });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await userModel.findOne({ username, password });
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      res.status(200).json({ message: `Welcome, ${user.username}!`, username: user.username });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Login failed" });
    }
  });



export default router;
