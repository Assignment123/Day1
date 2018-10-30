function reverseInt(val){
    return val.toString().split("").reverse().join("");
}
var keepValue = reverseInt(123456);
console.log(keepValue);