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
