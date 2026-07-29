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