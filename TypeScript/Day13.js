// Static type
var Company = /** @class */ (function () {
    function Company() {
    }
    Company.prototype.getName = function () {
        return "techCorp";
    };
    Company.name = "TechCorp";
    return Company;
}());
var t1 = new Company();
console.log(Company.name);
console.log(t1.getName());
// Type Guard
var ud = "Nil";
console.log(ud);
if (typeof ud == "boolean") {
    console.log('This is a boolean');
}
else if (typeof ud == "string") {
    console.log('This is a string');
}
var pro2 = /** @class */ (function () {
    function pro2() {
    }
    return pro2;
}());
var p1 = new pro2();
var or2 = /** @class */ (function () {
    function or2() {
    }
    return or2;
}());
var o1 = new or2();
function checkData(data) {
    if (data instanceof or2) {
        console.log("This is a order");
    }
    else {
        console.log("This is a product");
    }
}
checkData(o1);
