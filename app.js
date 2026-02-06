const express = require('express');
const carRoutes = require('./routes/carRoutes'); // Import your routes

const app = express();
const PORT = 3000;

app.use(express.json());

// Tell the app to use carRoutes for any URL starting with /api/cars
app.use('/api/cars', carRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Car API is running</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});