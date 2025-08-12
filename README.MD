# Express Contacts API

A simple RESTful API for managing a contacts app, built with [Express.js](https://expressjs.com/).

## Features

- Add, view, update, and delete contacts
- JSON-based API
- CORS enabled for cross-origin requests
- Relative path imports

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/)

## How to develop locally on your computer

1. Fork this repository
2. Clone to your local machine
3. `yarn install` in your terminal to install dependencies for development
4. `yarn dev` to start dev server
5. Open your browser and navigate to `http://localhost:4321/` to access the API
6. Use a tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/) to interact with the API

## API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/contacts`     | List all contacts |
| POST   | `/contacts`     | Add a new contact |
| PATCH  | `/contacts/:id` | Update a contact  |
| DELETE | `/contacts/:id` | Delete a contact  |

## Example Contact Object

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": "123-456-7890"
}
```

## Deployment Option(s)

You can deploy this API using various platforms such as:

- [CloudFlare](https://www.cloudflare.com/)

## Feedback

If you have any feedback of issues running the project or potential additions/improvements, please feel free to create a new issue to this repository.

## License

MIT
