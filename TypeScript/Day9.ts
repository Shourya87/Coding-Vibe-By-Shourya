// Type - 
type DataType = {name:string, email:string}

type a = {name:string};
type b = {email:string};

type c = a | b;

var empData: DataType={
    name: 'anil',
    email: 'anil@test.com'
}

var studentData = {
    name: 'sam',
    email: 'sam@test.com'
}


// Enums -
enum whoType {
    s = "student",
    t = "teacher",
    m = "management",
    l = "lab",
}

var who : whoType = whoType.s;
console.log(who);
console.log(whoType.t);



// DOM Handling and TypeCasting -
var heading = document.querySelector('h1');
console.log(heading);

var anchorEl = document.querySelector('.anchorStyle') as HTMLAnchorElement;

console.log(anchorEl.href);