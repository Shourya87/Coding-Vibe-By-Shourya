// Module
import UserInfoType from "./Day12";

var userInfo: UserInfoType = {
    name: "John Doe",   
    age: 30,
    email: "shourya@gmail.com",
    password: "password123"
}


// Getter and Setter
class empInfo {
    _name: string = "Riya";

    get name(): string {
        return "Miss." + this._name;
    }

    set names(val:string) {
        this._name =  "emp" + val;
    }
}

var emp1 = new empInfo();
emp1.names = "Priya";
console.log(emp1.name);