# Task Manager API



## A Simple REST API with authentication which can create users and create tasks.


## Server

The server is made on `nodejs` (v12.4.0)

`Express.js` is used as the server framework

## NPM Library

* `bcryptjs` - to encrypt plain password.

* `jsonwebtoken` - to create authentication token.

* `mongoose` - MongoDB library for JS.

* `multer` - to upload files.

* `sharp` - to convert large images in common formats to smaller, web-friendly JPEG, PNG and WebP images of varying dimensions.

* `validator` - to validate and sanitize string.


## API

* The base path of the API is `https://shubham-taskmanager.herokuapp.com`

* The various requests and endpoints are:-

  * POST `/users` - to create user.

  * POST `/users/login` - to login.

  * POST `/users/logout` - to logout.

  * POST `/tasks` - to create tasks.

  * POST `/users/logoutAll` - to logout from all sessions.

  * GET `/users/me` - to get user profile.

  * GET `/tasks` - to get user tasks.

  * PATCH `/users/me` - to update user information.

  * PATCH `/tasks/<id of the task to be updates>` - to update task.

  * DELETE `users/me` - to delete user.

  * DELETE `/tasks/<id of the task to be updates>` - to delete task.

* Use POSTMAN to fire off the requests to the endpoints.

---

## For Developers

### NPM Commands

* `npm i` install all dependencies

```terminal
npm i
```

* `npm run dev` starts the server

```terminal
npm run dev
```

---

Leave a star :star: , if you like :+1: it.
