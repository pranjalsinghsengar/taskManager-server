



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

### User Endpoints

- **POST /user/register**
  - Register a new user.
  - **Request Body:**
    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string"
    }
    ```

- **POST /user/login**
  - Log in an existing user.
  - **Request Body:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

- **POST /user/verifyToken**
  - Verify the JWT token.
  - **Headers:**
    - `Authorization: Bearer <token>`

### Task Endpoints

- **POST /task/create**
  - Create a new task.
  - **Request Body:**
    ```json
    {
      "title": "string",
      "description": "string",
      "status": "string"
    }
    ```
  - **Headers:**
    - `Authorization: Bearer <token>`

- **GET /task/list**
  - List all tasks for the authenticated user.
  - **Headers:**
    - `Authorization: Bearer <token>`

- **POST /task/update**
  - Update an existing task.
  - **Request Body:**
    ```json
    {
      "taskId": "string",
      "title": "string",
      "description": "string",
      "status": "string"
    }
    ```
  - **Headers:**
    - `Authorization: Bearer <token>`

- **POST /task/delete**
  - Delete a task.
  - **Request Body:**
    ```json
    {
      "taskId": "string"
    }
    ```
  - **Headers:**
    - `Authorization: Bearer <token>`



