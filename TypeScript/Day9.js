var empData = {
    name: 'anil',
    email: 'anil@test.com'
};
var studentData = {
    name: 'sam',
    email: 'sam@test.com'
};
// Enums -
var whoType;
(function (whoType) {
    whoType["s"] = "student";
    whoType["t"] = "teacher";
    whoType["m"] = "management";
    whoType["l"] = "lab";
})(whoType || (whoType = {}));
var who = whoType.s;
console.log(who);
console.log(whoType.t);
// DOM Handling and TypeCasting -
var heading = document.querySelector('h1');
console.log(heading);
var anchorEl = document.querySelector('.anchorStyle');
console.log(anchorEl.href);
