# Sum API Breadboard Take-Home Assignment

It's a simple API that takes two numbers as an argument and returns their sum

## Installation

Use the package manager [NPM](https://docs.npmjs.com/cli/v8/commands/npm-install) to install node modules.

```bash
npm install
```

## Usage

To start the application run the following command

```
npm run start:prod
```

## REST API

The REST API to the Sum app is described below.

## Add Two Numbers

### Request

`GET /sum/{firstNumber}/{secondNumber}`

    curl -X 'GET' \ 'http://localhost:3000/sum/123/34' \ -H 'accept: application/json'

### Response Body

    {
      "result": 157
    }

### Response Headers

    connection: keep-alive
    content-length: 14
    content-type: application/json; charset=utf-8
    date: Sat,12 Mar 2022 06:54:38 GMT
    etag: W/"e-9Escio4lxQsJzyPzfADunZhcKvQ"
    keep-alive: timeout=5
    x-powered-by: Express

## Add Two Numbers using Swagger UI

Head over to `http://localhost:3000/#/Sum/SumController_addNumbers`

Click try it out and enter the first number and second number and click execute

## Testing

Now you can execute the tests by launching

`npm run test`

##
