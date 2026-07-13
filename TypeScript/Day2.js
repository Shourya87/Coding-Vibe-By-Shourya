"use strict";
/*
// - Primitive Data Types
// number
var num : number = 10;
console.log(num);

// number (floot)
var num : number = 10.10;
console.log(num);
console.log(typeof(num));

// boolean
var isLogin: boolean = false;
console.log(isLogin);
console.log(typeof(isLogin));

// null
var data1 = null;
console.log(data1);

// undefined
var a = undefined;
console.log(a);



// - Object Data Types
// Array
var numbers : number[] = [1, 2, 3, 4];
console.log(typeof(numbers));

var names : string[] = ["Anil", "Sidhu"];
console.log(names);
console.log(typeof(names));

// Tuples
var person : [string, number] = ["Rachel", 30];
console.log(person);
console.log(typeof(person));

// Object
var user : { name: string; age: number } = { name: "Anil", age: 30 };
console.log(user);
console.log(typeof(user));



// - Special Data Types
// Any
 var tada : any = 42;
tada = "Now a string";
console.log(tada);
console.log(typeof(tada));

// Unknown
var input : unknown = "Hello";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
console.log(typeof(input));

// void
function logMsg(): void {
    console.log("This function returns nothing.");
}

// never
function throwError(): never {
    throw new Error("something went wrong.");
}



// - Advanced Data Types
// Union
var num: string | number = "rahul";
console.log(num);
num = 10;
console.log(num);


// Intersection
type Employee = { name: string };
type Manager = { department: string };
type TeamLead = Employee & Manager;
var lead: TeamLead = { name: "Riya", department: "Engineering" };
console.log(lead);
console.log(typeof(lead));


// Type Alias
type Id = string | number;
var userId : Id = "user123";
console.log(userId);
console.log(typeof(userId));


// Enum
enum Role {
    Admin,
    User,
    Guest,
};
var userRole : Role = Role.Guest;
console.log(userRole);
console.log(typeof(userRole));


// Literal Types
var direction: "up" | "down";
direction = "up"; //Allowed
console.log(direction);
console.log(typeof(direction));
direction = "left"; // Error

*/
Object.defineProperty(exports, "__esModule", { value: true });
