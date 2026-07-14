// var sym = Symbol();
// var sym2 = Symbol();

// var sym3 = Symbol('abc');

// console.log(sym == sym2);
// console.log(sym3);
// console.log(typeof sym3);


// function getInfo(){
//     console.log("getInfo function called");
    
//     const nameInput = document.getElementById('username') as HTMLInputElement;
//     console.log(nameInput.value);

//     const name: string = nameInput.value;


//     const ageInput = document.getElementById('age') as HTMLInputElement;
//     console.log(ageInput.value);

//     const age: string = ageInput.value;

//     console.log(name, age);

// }


let name : string[] = ["rahul", "ram" , "riya"];
name.push("kashish");
console.log(name);

var collegeName : ReadonlyArray<string> = ["Gl bajaj", "Amity", "NIT"];

console.log(typeof collegeName);
console.log(typeof name);