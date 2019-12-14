# People API

This API uses faker to create a list of people that can then be retrieved using a simple HTTP API.

## Usage

You will need to install the required dependencies by running `npm install`.

To start the API server you can use either NPM by running `npm start` or you can use node directly `node server.js`.

## Endpoints

### Fetch all people

#### Request

```
GET /people
```

#### Response

```
HTTP/1.1 200 Ok
Content-Type: application/json

[
    {
        "firstName": "Joanne",
        "lastName": "Bloggs",
        "avatar": "https://example.com/joanne.jpg"
    }
]
```

### Re-seed the list of people

#### Request

The value of count can be changed to the number of people required in the database

```
POST /seeds
Content-Type: application/json

{ "count": 100 }
```

#### Response

The list of people is now being regenerated

```
HTTP/1.1 202 Accepted
```

