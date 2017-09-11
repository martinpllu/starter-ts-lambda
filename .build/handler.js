"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.hello = (event, context, callback) => __awaiter(this, void 0, void 0, function* () {
    let m = yield message('worldo', 0.0);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: `Go Serverless v1.0! ${m}`,
            input: event,
        }),
    };
    callback(undefined, response);
});
const message = (name, time) => new Promise((resolve, reject) => setTimeout(() => {
    resolve(`Hello there ${name} (with a delay)`);
}, time * 1000));
//# sourceMappingURL=handler.js.map