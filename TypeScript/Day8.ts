// Union Type - 
var sData : string | number | boolean = "anil";

sData = 9999;
console.log(sData);


// Interface
interface Info{
    name: string,
    age: number,
    colloge: string
}

interface TeacherType extends Info {
    subject: string,
}

var studentObj: Info = {
    name: 'anil',
    age: 20,
    colloge: 'IIT gwalior'
}

var teacherObj: Info = {
    name: "Mohini",
    age: 30,
    college: 'IIT gwalior',
    subject: "Maths"
}

console.log(teacherObj.college);
