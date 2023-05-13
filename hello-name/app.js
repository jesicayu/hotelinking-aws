// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  try {
    const name =
      event.queryStringParameters && event.queryStringParameters.name
        ? event.queryStringParameters.name
        : "World";
    const currentTime = new Date().toLocaleTimeString();
    const htmlResponse = `
       <html>
           <body>
               <h1>Hello ${name}, the time is ${currentTime}</h1>
           </body>
       </html>
   `;

    response = {
      statusCode: 200,
      headers: {
        "Content-Type": "text/html",
      },
      body: htmlResponse,
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
