export class Greeter {


    sayHelloAsync(name:string): Promise<string> {
        return new Promise((resolve, reject) => {
            if (name == 'Mars'){
                reject("I can't speak Martian")
            }
            else {
                resolve(`Hello ${name}`)
            }
        })
    }


}