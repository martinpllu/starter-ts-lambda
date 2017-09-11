import { Context, Callback } from 'aws-lambda';

interface HelloResponse {
  statusCode: number;
  body: string;
}

// const hello: Handler = (event: any, context: Context, callback: Callback) => {
//   const response: HelloResponse = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: Math.floor(Math.random() * 10)
//     })
//   };

//   callback(undefined, response);
// };

// export { hello }


export const hello = async (event:any, context:Context, callback:Callback) => {
  let m = await message('worldo', 0.0);
  const response:HelloResponse = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${m}`,
      input: event,
    }),
  };
  callback(undefined, response);
};

const message = (name:string, time:number) => new Promise((resolve, reject) => 
  setTimeout(() => {
    resolve(`Hello there ${name} (with a delay)`);
  }, time * 1000)
);