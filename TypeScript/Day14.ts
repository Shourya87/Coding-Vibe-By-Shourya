// Generic
function fruits<T>(name:T) : T {
    return name;
}


let onlyfruit = fruits("apple");
let onlyNum = fruits(100);
let onlyBool = fruits(true);
