// Any Unknown - 2
function complex() {
    var data = 10;
    var name = "anil";
    var type = "age";
    if (type == 'age') {
        return data;
    }
    else {
        return name;
    }
}
function anything() {
    return;
}
// Never
function loopfunction() {
    while (true) {
        console.log("loop");
    }
}
// function simple(): never {
//     console.log("simple");
// }
// Params Type
function totalPrice(item, price) {
    console.log(price * item);
}
totalPrice(50, "40");
totalPrice(30, 50);
