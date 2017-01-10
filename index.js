'use strict'

const AWS = require('aws-sdk')
const LambdaInvoker = require('lambda-invoker')

const getPayload = (req, options = {}) => {
  return typeof req[options.payloadAttrName] !== 'undefined' ? req[options.payloadAttrName] : req.body
}

module.exports = (lambdaArn, options = {}) => {

  AWS.config.region = options.region || 'eu-west-1'
  AWS.config.accessKeyId = options.accessKeyId
  AWS.config.secretAccessKey = options.secretAccessKey

  const invoker = new LambdaInvoker(new AWS.Lambda())

  return (req, res, next) => {
    const payload = getPayload(req, options)

    invoker.invoke(lambdaArn, payload, (err, data) => {
      if (err) {
        res.status(err.statusCode || 500).json({message: err.message})
        return
      }

      req[options.payloadAttrName || 'payload'] = data
      next()
    })

  }
}