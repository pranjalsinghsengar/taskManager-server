



# Task Manager API

## Project Description

The Task Manager API is a RESTful web service built with Node.js, Express, and MongoDB. It allows users to manage tasks, including creating, updating, deleting, and listing tasks. The API is designed to be secure, utilizing JWT (JSON Web Tokens) for authentication and authorization.

### Features
- User registration and login
- Task creation, updating, deletion, and listing
- Secure token-based authentication
- CORS support for cross-origin requests

## Technologies Used
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for authentication
- dotenv for environment variable management
- TypeScript for type safety

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB installation)
- TypeScript (installed globally)

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pranjalsinghsengar/taskManager-server.git
   cd taskmanager-server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
    MONGODB_URI=mongodb+srv://pranjalsinghsengar:pranjalsinghsengar@cluster0.yoqhi.mongodb.net/Task-Manager?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET=123456
    PORT=5000

   ```
4. **Build the project:**
   ```bash
   npm run build
   ```

5. **Start the server:**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

## API Endpoints

## Base URL
```
https://taskmanager-server-pm9v.onrender.com
```

## Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

## User Endpoints

### Register User
Create a new user account.

- **URL**: `/user/register`
- **Method**: `POST`
- **Headers**: 
  - Content-Type: application/json
- **Body**:
```json
{
    "username": "string",
    "email": "string",
    "password": "string"
}
```
- **Example**:
```json
{
    "username": "new account",
    "email": "test12@gmail.com",
    "password": "123456"
}
```

### Verify Token
Verify if the JWT token is valid.

- **URL**: `/user/verifyToken`
- **Method**: `POST`
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer <token>
- **Body**: Empty

## Task Endpoints

### Create Task
Create a new task.

- **URL**: `/task/create`
- **Method**: `POST`
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer <token>
- **Body**:
```json
{
    "title": "string",
    "description": "string",
    "status": "string"
}
```

### Update Task
Update an existing task.

- **URL**: `/task/update`
- **Method**: `POST`
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer <token>
- **Body**:
```json
{
    "taskId": "string",
    "title": "string",
    "description": "string",
    "status": "string"
}
```

### List Tasks
Get all tasks for the authenticated user.

- **URL**: `/task/list`
- **Method**: `GET`
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer <token>
- **Body**: Empty

### Update Task Status
Update the status of an existing task.

- **URL**: `/task/update/status`
- **Method**: `GET`
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer <token>
- **Body**:
```json
{
    "taskId": "string",
    "status": "string"
}
```

### Delete Task
Delete an existing task.

- **URL**: `/task/delete`
- **Method**: `GET`
- **Headers**: 
  - Content-Type: application/json
  - Authorization: Bearer <token>
- **Body**:
```json
{
    "taskId": "string"
}
```

## Status Codes
- `200`: Success
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error

