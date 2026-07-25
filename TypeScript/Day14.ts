// Generic
function fruits<T>(name:T) : T {
    return name;
}


let onlyfruit = fruits("apple");
let onlyNum = fruits(100);
let onlyBool = fruits(true);




// KeyOf
type Person = {
    name: string,
    age: number,
    is: boolean,
}

let PersonData : Person = {
    name : "Riya",
    age: 30,
    is: true,
}

type PersonX = keyof Person;
let PersonDataX: PersonX;

PersonDataX = "age";
PersonDataX = "name";



// Index Signature
type userDataType = {
    readonly [key: string]: number|string
}

var userData : userDataType = {
    mobile: 999,
    id: 10,
    marks: 40,
    sem: 3,
}

console.log(userData.marks);