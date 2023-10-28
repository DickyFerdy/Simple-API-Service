# 🚀 Simple Express.js API for Data Management 🚀

Welcome to the Simple Express.js API repository for data management. This project is all about making data management a breeze! It's built using Node.js, Express.js, and MySQL as the database. Let's dive in and see what this project offers. 😄

### Features 📋

- **GET /karyawan**: Retrieve a list of all employees. 📄
- **GET /karyawan/:id**: Retrieve an employee by their unique ID. 🕵️‍♂️
- **POST /karyawan**: Create a new employee entry. ✍️
- **PUT /karyawan**: Update an existing employee's information. 🔄
- **DELETE /karyawan**: Delete an employee by ID. 🗑️

### Technologies Used 🛠️

- Node.js 🟢
- Express.js 🚂
- MySQL 🐬
- JavaScript 🚀
- Nodemon (for automatic server restart) 🔄
- Postman (for API testing) 📦
- XAMPP (for local server and database setup) 🌐

### Code Structure 🧩

- `connection.js`: This module establishes a connection to the MySQL database using the provided credentials.
- `response.js`: It provides a utility function for formatting API responses with status codes, data, and messages.
- `karyawan.js`: Contains the `KaryawanModel` class, which defines methods for interacting with the "karyawan" table in the database.

### Usage 🧭

To run this API locally, make sure you have Node.js and XAMPP (or any other local server solution) set up. Clone this repository, configure your database connection in 'connection.js', and run the following commands:

```bash
npm install
npm start
```
You can use Postman to test the API endpoints during development. Import the provided Postman collection and start testing!

## Please Note 📝
This project is primarily intended for educational purposes. While it demonstrates the fundamentals of building a simple data management API, it may not be suitable for production use without additional development, security, and scalability considerations. Use this project as a learning resource and consider it a starting point for building more robust and production-ready APIs.

### Acknowledgments and Thanks 🙏

A special thanks to Bang Dea Afrizal for his valuable guidance and inspiration. This project was inspired by his YouTube videos.
