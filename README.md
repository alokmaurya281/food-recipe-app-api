 # Food Recipe App API

This is a Node.js and Express-based API for a food recipe app. It includes features such as user authentication, recipe creation, recipe retrieval, and recipe deletion.

## Prerequisites

To run this API, you will need the following:

* Node.js (version 16 or higher)
* npm (version 8 or higher)
* MongoDB (version 4 or higher)

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory of the project and add the following environment variables:

```
MONGODB_URI=mongodb://localhost:27017/food-recipe-app
JWT_SECRET=your-secret-key
SENDGRID_API_KEY=your-sendgrid-api-key
```

4. Start the API by running `npm start`.

## Usage

### User Authentication

To register a new user, send a POST request to `/api/users/register` with the following JSON body:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password"
}
```

To log in a user, send a POST request to `/api/users/login` with the following JSON body:

```json
{
  "email": "john.doe@example.com",
  "password": "password"
}
```



### Recipe Retrieval

To retrieve all recipes, send a GET request to `/api/recipes`.

To retrieve a single recipe, send a GET request to `/api/recipes/:id`, where `:id` is the ID of the recipe.

## Error Handling

The app uses the errorHandler middleware to handle errors. The errorHandler middleware logs errors to the console and sends a JSON response to the client with the error message.

## Swagger Documentation

The app uses the swagger-ui-express package to generate Swagger documentation. The Swagger documentation is available at `/api_docs`.

## Running the App

To run the app, run the following command in the project directory:

```
npm start
```

The app will listen on port 5001 by default.




