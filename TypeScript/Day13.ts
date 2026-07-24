// Static type
class Company{
  static name: string = "TechCorp";

 getName(){
    return "techCorp";
}

var t1 = new Company();
console.log(Company.name)
console.log(t1.getName());


// Type Guard
let ud: number | string | boolean = "Nil";
console.log(ud);

if(typeof ud == "boolean") {
    console.log('This is a boolean');
}

else if(typeof ud == "string") {
    console.log('This is a string');
}


class pro2 {

}

var p1 = new pro2();
class or2 {

}

var o1 = new or2();

function checkData (data: or2 | pro2) {
    if (data instanceof or2) {
        console.log("This is a order");
    } else {
        console.log("This is a product");
    }
}

checkData(o1);