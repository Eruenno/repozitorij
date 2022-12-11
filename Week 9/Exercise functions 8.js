//Write IIFE that replaces the first and the last element of the given array and prints out its elements.
//Input array: [4, 5, 11, 9]
//Output array: [ 9, 5, 11, 4]

var result = (
    function (arr) {
        let a;
        a = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = a;
        return arr;
    }
) ([4, 5, 11, 9]);

console.log(result);



//Write IIFE that calculates the surface area of the given rectangle with sides a and b.
//Input: 4 5
//Output: 20

var result = (
    function (surface) {
        surface = a * b;
        return surface;
    }
) (a = 4, b = 5);

console.log(result);



//Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
//Input: prograMming
//Output: progra**ing, 2

var result = (
    function (Str) {
        let counter = 0;
        for (let i = 0; i < Str.length; i++) {
        if (Str[i] == "m" || Str[i] == "M") {
            Str[i] = "*";
            counter ++;
        }
        return Str, counter;
    }
}
) ("prograMming");

console.log(result);



var sum = 0; 
for (var i = 0; i < 10; i++) { 
    if (i % 3 == 0) { 
        sum++;
    } 
    if (i == 8) { 
        break;
    }
}
console.log(sum);



var result;
var n;
n = 4; 
switch (n) {
    case 2:
        result = 1;
        break;
    case 4:
        result = 2;
    case 6:
        result = 3;
        break;
    default:
        result = 100;
}
console.log(result); 


var s = "coffee";

s[0] = "C";
console.log(s);