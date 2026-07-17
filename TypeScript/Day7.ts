// Any Unknown - 2
function complex(): number|string|boolean {
    let data = 10;
    let name = "anil";
    let type = "age";

    if(type == 'age') {
        return data;
    }
    else {
        return name;
    }
}

function anything(): any{
    return;
}



// Never
function loopfunction(): never {
    
    while (true) {
        console.log("loop");
    } 
}

// function simple(): never {
//     console.log("simple");
// }



// Params Type
function totalPrice(item:number, price: any) {
     console.log(price * item);
}

totalPrice(50, "40");
totalPrice(30, 50);
