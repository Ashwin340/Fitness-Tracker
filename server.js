const express = require('express');echo const mongoose = require('mongoose');echo const cors = require('cors');echo const bodyParser = require('body-parser');echo const app = express();echo const PORT = 3000;echo. 
app.use(cors());echo app.use(bodyParser.json());echo. 
// Workout Schemaecho const workoutSchema = new mongoose.Schema({ workout: Number, calories: Number });echo const Workout = mongoose.model('Workout', workoutSchema);echo. 
// Routesecho app.post('/add', async (req, res) = const { workout, calories } = req.body; const newWorkout = new Workout({ workout, calories }); await newWorkout.save(); res.send({ message: 'Workout added', data: newWorkout }); });echo app.get('/history', async (req, res) = const data = await Workout.find(); res.send(data); });echo. 
app.listen(PORT, () = running on http://localhost:${PORT})); 
const express = require('express');echo const mongoose = require('mongoose');echo const cors = require('cors');echo const bodyParser = require('body-parser');echo const app = express();echo const PORT = 3000;echo. 
app.use(cors());echo app.use(bodyParser.json());echo. 
// Workout Schemaecho const workoutSchema = new mongoose.Schema({ workout: Number, calories: Number });echo const Workout = mongoose.model('Workout', workoutSchema);echo. 
// Routesecho app.post('/add', async (req, res) = const { workout, calories } = req.body; const newWorkout = new Workout({ workout, calories }); await newWorkout.save(); res.send({ message: 'Workout added', data: newWorkout }); });echo app.get('/history', async (req, res) = const data = await Workout.find(); res.send(data); });echo. 
app.listen(PORT, () = running on http://localhost:${PORT})); 
