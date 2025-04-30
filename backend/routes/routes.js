import express from "express";
import user from "../modles/user.Model.js";
import history from "../modles/history.Model.js";

const router = express.Router();

// create a new user
router.post('/user', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// get all history entries
router.get('/history', async (req, res) => {
    try {
        const history = await History.find().populate('user');
        res.status(200).json(history);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// add new history
router.post('/history', async (req, res) => {
    try {
        const history = new History(req.body);
        await history.save();
        res.status(201).json(history);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
