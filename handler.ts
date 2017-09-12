import { Handler, Context, Callback } from 'aws-lambda';
import { Greeter } from './library';

const hello: Handler = (event: any, context: Context, callback: Callback) => {
  console.log(JSON.stringify(event.queryStringParameters))
  let name = event.queryStringParameters['name'];
  let sendResponse = (status:number, bodyText:string) => {
    callback(undefined, {
      statusCode: status,
      body: bodyText
    })
  }
  new Greeter().sayHelloAsync(name)
    .then((greeting) => {
      sendResponse(200, greeting);
    })
    .catch((error) => {
      sendResponse(500, error);
    })
}

export { hello }