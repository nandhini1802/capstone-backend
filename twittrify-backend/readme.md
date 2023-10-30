# Twittrify Backend API

This is the backend API for a social media application developed using Node.js, Express, and MongoDB. This API provides the necessary endpoints to manage user accounts, posts, comments, and more.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running
- Clone this repository


### Installation

1. Clone the repository:

```bash

cd twittrify-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a .env file in the root directory and configure environment variables (see .env.example for guidance).

4. Start the server:
```bash
nodemon app.js
```

### Usage

To use this API, follow the installation instructions above. Once the server is running, you can make HTTP requests to the defined endpoints.

Here is a list of the available API endpoints:

- `/api/auth`: User management (registration, login)
- `/api/users`: Post management (get user, get user friends, add/remove friends)
- `/api/posts`: Post management (create, read, update, delete, like/unlike posts)

For detailed information on each endpoint, refer to the API documentation or routes files in the project.


### Authentication

This API uses JSON Web Tokens (JWT) for authentication. To access protected routes, include a valid JWT token in the request headers.

Example:

```bash
Authorization: Bearer YOUR_JWT_TOKEN
```


### Database

This application uses MongoDB as the database. Make sure you have a MongoDB instance running and configured in your .env file.


### Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [NodeJS](https://nodejs.org/) - Node.js is an open-source, cross-platform JavaScript runtime environment.
* [ExpressJS](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [MongoDB](https://www.mongodb.com/) - MongoDB is a source-available cross-platform document-oriented database program.
