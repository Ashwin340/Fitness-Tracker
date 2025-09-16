const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // serve frontend

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/fitnessDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Define Schema
const workoutSchema = new mongoose.Schema({
  workout: Number,
  calories: Number,
  date: { type: Date, default: Date.now }
});

const Workout = mongoose.model('Workout', workoutSchema);

// ✅ API Routes
app.post('/api/add', async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    await newWorkout.save();
    res.json({ message: "Workout saved!", workout: newWorkout });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/history', async (req, res) => {
  try {
    const history = await Workout.find().sort({ date: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));