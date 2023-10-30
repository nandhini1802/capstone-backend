# Twittrify Backend API

This is the backend API for a social media application developed using Node.js, Express, and MongoDB. This API provides the necessary endpoints to manage user accounts, posts, comments, and more.


cd twittrify-backend
```

npm install
```
 Create a .env file in the root directory and configure environment variables (see .env.example for guidance).

 Start the server:

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


