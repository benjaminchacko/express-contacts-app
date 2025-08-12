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
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## How to develop locally

1. Fork this repository
2. Clone to local machine
3. `npm install` or `yarn install` in terminal to install dependencies
4. `npm run dev` or `yarn dev` to start dev server
5. Use a tool like [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to interact with the API

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
