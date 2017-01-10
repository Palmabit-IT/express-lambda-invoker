# Express Lambda invoker

A wrapper of **lambda-invoker** as an express middleware. See [lambda-invoker](https://github.com/Palmabit-IT/lambda-invoker).

## Installation

```
npm install express-lambda-invoker --save
```

## Usage

```js
const express = require('express');
const router = express.Router();
const expressLambdaInvoker = require('express-lambda-invoker')

const lambdaArn = 'arn:aws:lambda:...'

const options = {
  region: 'eu-west-1', // default eu-west-1
  accessKeyId: 'aws access key id...',
  secretAccessKey: 'aws secret access key...',
  payloadAttrName: 'reqObjectAttribute'
}

const invokerMiddleware = expressLambdaInvoker(lambdaArn, options)

// Routes
router.route('/route-name')
    .get(
      // others middlewares
      invokerMiddleware,
      // others middlewares
    )
```

The payload that is sent to Lambda is `req[options.payloadAttrName]`. The Lambda's response is replaced to that attribute. If not present `req.body` is used.

## Author

[Palmabit](https://palmabit.com)

## License

[MIT license](LICENSE)
