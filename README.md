
# Digital Garage API

A RESTful API for managing a digital car garage built with Node.js and Express. This project allows you to perform CRUD operations on car data, making it perfect for learning API development or managing your car inventory digitally.

## Features

- 🚗 **Car Management**: Full CRUD operations - Create, Read, Update, and Delete cars in your digital garage
- 🔧 **RESTful API**: Clean and organized REST endpoints with complete HTTP methods
- 📁 **File-based Storage**: Uses JSON files for persistent data storage
- 🔄 **Auto-reload**: Development server with nodemon for automatic restarts
- 📊 **Structured Data**: Well-organized car data with brand, model, year, and fuel level
- 📝 **Request Logging**: HTTP request logging with Morgan middleware for development and debugging
- ✅ **Input Validation**: Robust data validation using Joi schema validation for all car data (brand, model, year, fuelLevel)

## Project Structure

```
digital-garage-api/
├── app.js              # Main application entry point
├── package.json        # Project dependencies and scripts
├── routes/
│   └── carRoutes.js    # Car-related API routes
├── data/
│   └── cars.json       # Car data storage
├── node_modules/       # Dependencies (auto-generated)
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amzadb/digital-garage-api.git
   cd digital-garage-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   # For development with auto-reload
   npm run dev
   
   # For production
   npm start
   ```

4. **Access the API**
   - Server runs on: `http://localhost:3000`
   - API base URL: `http://localhost:3000/api/cars`

## API Endpoints

### Base URL: `/api/cars`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/cars` | Get all cars |
| GET    | `/api/cars/:id` | Get a specific car by ID |
| POST   | `/api/cars` | Add a new car |
| PUT    | `/api/cars/:id` | Update an existing car |
| DELETE | `/api/cars/:id` | Delete a car |

### Response Format

Cars are returned in this format:
```json
{
  "id": 1,
  "brand": "Tesla",
  "model": "Cybertruck",
  "year": 2024,
  "fuelLevel": 85
}
```

### Validation Errors

If validation fails, the API returns a 400 status with error details:
```json
{
  "message": "Validation Error",
  "details": "\"brand\" length must be at least 2 characters long"
}
```

## Data Validation

The API uses Joi schema validation for all POST and PUT requests. The validation rules are:

- **brand**: String, minimum 2 characters, required
- **model**: String, minimum 1 character, required
- **year**: Integer, between 1886 and 2026, required
- **fuelLevel**: Integer, between 0 and 100, required

## Usage Examples

### Get All Cars
```bash
curl http://localhost:3000/api/cars
```

### Get a Specific Car
```bash
curl http://localhost:3000/api/cars/1
```

### Add a New Car
```bash
curl -X POST http://localhost:3000/api/cars \
  -H "Content-Type: application/json" \
  -d '{
    "brand": "BMW",
    "model": "X5",
    "year": 2023,
    "fuelLevel": 42
  }'
```

### Update an Existing Car
```bash
curl -X PUT http://localhost:3000/api/cars/1 \
  -H "Content-Type: application/json" \
  -d '{
    "brand": "Tesla",
    "model": "Cybertruck",
    "year": 2024,
    "fuelLevel": 90
  }'
```

### Delete a Car
```bash
curl -X DELETE http://localhost:3000/api/cars/1
```

## Sample Data

The API comes with sample car data including:
- Tesla Cybertruck (2024, fuelLevel: 85)
- BMW X5 (2023, fuelLevel: 42)
- Audi A4 (2022, fuelLevel: 67)
- Mercedes C-Class (2023, fuelLevel: 91)
- Ford Mustang (2024, fuelLevel: 23)
- Chevrolet Camaro (2022, fuelLevel: 76)
- Toyota Corolla (2023, fuelLevel: 55)
- Honda Civic (2024, fuelLevel: 89)
- Nissan Altima (2022, fuelLevel: 34)
- Volkswagen Golf (2023, fuelLevel: 62)

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **Joi**: Schema validation library for input validation and data integrity
- **Morgan**: HTTP request logger middleware for debugging and monitoring
- **File System (fs)**: For JSON data persistence
- **Nodemon**: Development dependency for auto-restarting server

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start the production server |
| `npm run dev` | Start development server with auto-reload |
| `npm test` | Run tests (not implemented yet) |

## Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test your changes
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## File Structure Details

- **`app.js`**: Main application server setup and configuration
- **`routes/carRoutes.js`**: Contains all car-related API endpoints and logic
- **`data/cars.json`**: JSON file storing all car data
- **`package.json`**: Project configuration, dependencies, and scripts

## Future Enhancements

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Authentication and authorization
- [ ] Input validation and error handling
- [ ] Unit and integration tests
- [ ] Docker containerization
- [ ] API documentation with Swagger

