// Static type
class Company{
  static name: string = "TechCorp";

 getName(){
    return "techCorp";
}

var t1 = new Company();
console.log(Company.name)
console.log(t1.getName());