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

### Installation

```bash
git clone https://github.com/yourusername/express-contacts-app.git
cd express-contacts-app
npm install
```

### Running the Server

```bash
npm run dev
```

The API will be available at `http://localhost:4321/`.

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

## License

MIT
