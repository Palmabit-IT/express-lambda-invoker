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
  accessKeyId: 'aws access key id...',
  secretAccessKey: 'aws secret access key...',
  payloadAttrName: 'reqObjectAttribute',
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

## Author

[Palmabit](https://palmabit.com)

## License

[MIT license](LICENSE)
