// Access Modifiers
class Person {
    private name: string;
    protected age: number;
    public gender: string; 

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public getName(): string {
        return this.name;
    }

    protected getAge(): number {
        return this.age;
    }
}


class Employee extends Person {
    private employeeId: number;

    constructor(name: string, age: number, gender: string, employeeId: number) {
        super(name, age, gender);
        this.employeeId = employeeId;
    }

    public getEmployeeId(): number {
        return this.employeeId;
    }

    public getEmployeeDetails(): string {
        return `Name: ${this.getName()}, Age: ${this.getAge()}, Gender: ${this.gender}, Employee ID: ${this.employeeId}`;
    }
}

const employee = new Employee("John Doe", 30, "Male", 12345);
console.log(employee.getEmployeeDetails()); 
console.log(employee.getEmployeeId());

const person = new Person("Jane Doe", 25, "Female");

console.log(person.gender);


// Inheritance
class Animal {
    protected species: string;

    constructor(species: string) {
        this.species = species;
    }

    public getSpecies(): string {
        return this.species;
    }
}

class Dog extends Animal {
    private breed: string;

    constructor(species: string, breed: string) {
        super(species);
        this.breed = breed;
    }

    public getBreed(): string {
        return this.breed;
    }

    public getDogDetails(): string {
        return `Species: ${this.getSpecies()}, Breed: ${this.breed}`;
    }
}

const dog = new Dog("Canine", "Labrador");
console.log(dog.getDogDetails());  