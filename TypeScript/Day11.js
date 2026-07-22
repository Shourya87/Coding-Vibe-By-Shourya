"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userInfo = {
    name: "John Doe",
    age: 30,
    email: "shourya@gmail.com",
    password: "password123"
};
// Getter and Setter
var empInfo = /** @class */ (function () {
    function empInfo() {
        this._name = "Riya";
    }
    Object.defineProperty(empInfo.prototype, "name", {
        get: function () {
            return "Miss." + this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(empInfo.prototype, "names", {
        set: function (val) {
            this._name = "emp" + val;
        },
        enumerable: false,
        configurable: true
    });
    return empInfo;
}());
var emp1 = new empInfo();
emp1.names = "Priya";
console.log(emp1.name);
