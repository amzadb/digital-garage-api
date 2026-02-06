# Digital Garage API

A RESTful API for managing a digital car garage built with Node.js and Express. This project allows you to perform CRUD operations on car data, making it perfect for learning API development or managing your car inventory digitally.

## Features

- 🚗 **Car Management**: Add, view, and manage cars in your digital garage
- 🔧 **RESTful API**: Clean and organized REST endpoints
- 📁 **File-based Storage**: Uses JSON files for persistent data storage
- 🔄 **Auto-reload**: Development server with nodemon for automatic restarts
- 📊 **Structured Data**: Well-organized car data with make, model, year, and electric status

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

### Response Format

Cars are returned in this format:
```json
{
  "id": 1,
  "make": "Tesla",
  "model": "Model 3",
  "year": 2023,
  "electric": true
}
```

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
    "make": "BMW",
    "model": "i4",
    "year": 2024,
    "electric": true
  }'
```

## Sample Data

The API comes with sample car data including:
- Tesla Model 3 (2023, Electric)
- Ford Mustang (1969, Gas)
- Porsche Taycan (2024, Electric)
- Toyota Camry (2022, Gas)

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
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

## License

This project is licensed under the ISC License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

For questions or suggestions, please open an issue on the GitHub repository.