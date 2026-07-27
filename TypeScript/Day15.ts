// Utility -
interface CollegeType {
  name: string;
  location: string;
  students?: number;
  branch?: number;
}

let CollegeData: Partial<CollegeType> = {
  name: "IIT Delhi",
  location: "Delhi",
  students: 600,
};

// console.log(CollegeData.location);

function getCollegeData(data: Partial<CollegeType>) {
  console.log(data);
}

// getCollegeData({ name: "IIT bombay" });

function getCollegeData2(data: Required<CollegeType>) {
  return data;
}

getCollegeData2({
  name: "IIT bombay",
  location: "Bombay",
  students: 400,
  branch: 4,
});

var CollegeData4: Readonly<CollegeType> = {
  name: "IIT Kanpur",
  location: "Kanpur",
  students: 400,
  branch: 6,
};

CollegeData4.name = "IIT Guwahati";

var CollegeData5: Pick<CollegeType, "name" | "location"> = {
  name: "NIT Kanpur",
  location: "Kanpur",
  students: 400,
  branch: 6,
};

// NameSpace
namespace UserNameSpace {
  export class Auth {
    login() {
      console.log("user login function");
    }
  }

  export function getList() {
    console.log("List of users");
  }
}

// var user = new UserNameSpace.Auth()
// user.login();
// UserNameSpace.getList();





// Decorators
function classLogger(constructor: Function) {
    console.log(constructor.name);
}



@classLogger
class CustomMaths{
    value1: number;
    value2: number;

    constructor(x: number, y: number){
        this.value1 = x;
        this.value2 = y;
    }
}

var c1 = new CustomMaths(10, 20);
