const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const Joi = require('joi'); 

const DATA_PATH = path.join(__dirname, '../data/cars.json');

// Define the blueprint (Schema) for a Car (as per cars.json)
const carSchema = Joi.object({
    brand: Joi.string().min(2).required(),
    model: Joi.string().min(1).required(),
    year: Joi.number().integer().min(1886).max(2026).required(),
    fuelLevel: Joi.number().integer().min(0).max(100).required()
});

// Helper functions
const readCars = () => JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
const saveCars = (data) => fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

// Validation helper function
const validateCar = (req, res, next) => {
    // Validate the incoming request body against our schema
    const { error } = carSchema.validate(req.body);

    if (error) {
        // If validation fails, return a 400 (Bad Request) and the error message
        return res.status(400).json({ 
            message: "Validation Error", 
            details: error.details[0].message 
        });
    }
    
    next(); // Continue to the next middleware/route handler
};

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
router.post('/', validateCar, (req, res) => {
    const cars = readCars();
    // Ensure new car has a unique id
    const newId = cars.length > 0 ? Math.max(...cars.map(c => c.id)) + 1 : 1;
    const newCar = { id: newId, ...req.body };
    cars.push(newCar);
    saveCars(cars);
    res.status(201).json(newCar);
});

// PUT update car by ID
router.put('/:id', validateCar, (req, res) => {
    const cars = readCars();
    const carIndex = cars.findIndex(c => c.id === parseInt(req.params.id));
    if (carIndex === -1) {
        return res.status(404).json({ message: 'Car not found' });
    }
    // Only update allowed fields
    const updatedCar = {
        ...cars[carIndex],
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        fuelLevel: req.body.fuelLevel,
        id: cars[carIndex].id
    };
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
