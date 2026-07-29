// Override Function wiht Decorator
function updatedSum(originalMethod: Function, context: ClassMethodDecoratorContext) {
    return function (this: any, x: number, y: number) {
        const output = x + y;
        return `The output of ${x} and ${y} is : ${output}`;
    };
}

class CustomMaths1 {
    @updatedSum
    sum(x: number, y: number) {
        return x + y;
    }
}

const cm2 = new CustomMaths1();
console.log(cm2.sum(10, 20));




// Typed Promise
function complexLogic(): Promise<string> {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved("Result is here")
        }, 2000);
    })
}

complexLogic().then((data:string)=>{
    console.log(data);

    test2();
})
function test2() {
    console.log("Test2");
}