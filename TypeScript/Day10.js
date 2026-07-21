var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Access Modifiers
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, gender, employeeId) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    Employee.prototype.getEmployeeDetails = function () {
        return "Name: ".concat(this.getName(), ", Age: ").concat(this.getAge(), ", Gender: ").concat(this.gender, ", Employee ID: ").concat(this.employeeId);
    };
    return Employee;
}(Person));
var employee = new Employee("John Doe", 30, "Male", 12345);
console.log(employee.getEmployeeDetails());
console.log(employee.getEmployeeId());
var person = new Person("Jane Doe", 25, "Female");
console.log(person.gender);
// Inheritance
var Animal = /** @class */ (function () {
    function Animal(species) {
        this.species = species;
    }
    Animal.prototype.getSpecies = function () {
        return this.species;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(species, breed) {
        var _this = _super.call(this, species) || this;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.getBreed = function () {
        return this.breed;
    };
    Dog.prototype.getDogDetails = function () {
        return "Species: ".concat(this.getSpecies(), ", Breed: ").concat(this.breed);
    };
    return Dog;
}(Animal));
var dog = new Dog("Canine", "Labrador");
console.log(dog.getDogDetails());
