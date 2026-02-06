const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '../data/cars.json');

// Helper functions
const readCars = () => JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
const saveCars = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

// GET all cars
router.get('/', (req, res) => {
    res.json(readCars());
});

// GET car by ID
router.get('/:id', (req, res) => {
    const cars = readCars();
    const car = cars.find(c => c.id === parseInt(req.params.id));
    car ? res.json(car) : res.status(404).send("Not found");
});

// POST new car
router.post('/', (req, res) => {
    const cars = readCars();
    const newCar = { id: cars.length + 1, ...req.body };
    cars.push(newCar);
    saveCars(cars);
    res.status(201).json(newCar);
});

// PUT update car by ID
router.put('/:id', (req, res) => {
    const cars = readCars();
    const carIndex = cars.findIndex(c => c.id === parseInt(req.params.id));
    
    if (carIndex === -1) {
        return res.status(404).json({ message: 'Car not found' });
    }
    
    const updatedCar = { ...cars[carIndex], ...req.body, id: cars[carIndex].id };
    cars[carIndex] = updatedCar;
    saveCars(cars);
    res.json(updatedCar);
});

// DELETE car by ID
router.delete('/:id', (req, res) => {
    const cars = readCars();
    const carIndex = cars.findIndex(c => c.id === parseInt(req.params.id));
    
    if (carIndex === -1) {
        return res.status(404).json({ message: 'Car not found' });
    }
    
    const deletedCar = cars.splice(carIndex, 1)[0];
    saveCars(cars);
    res.json({ message: 'Car deleted successfully', car: deletedCar });
});

module.exports = router; // Export the router
