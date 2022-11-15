//Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
//Input: ["1", "21", undefined, "42", "1e+3", infinity]
//Output: [1, 21, 42, 1000]

function stringToNumber (a) {
    let output =[];
    for (let i = 0; i < a.length; i++) {
        let b;
        b = parseFloat(a[i])
        if (typeof(b) == "number" && isNaN(a[i]) == false && b !== Infinity) {
            output.push(b)
        }
    }

    return output;
}

a = ["1", "21", undefined, "42", "1e+3", Infinity]
console.log(stringToNumber(a))



//Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.
//Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
//Output: “015false-2247”

function numStringConcat (arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null && arr[i] !== undefined && !isNaN(arr[i]) && isFinite(arr[i])) {
        output += arr[i];
        }
    }


    return output;
}

arr = [NaN, 0, 15, false, -22, "", undefined, 47, null]
console.log(numStringConcat(arr));



//Write a program to filter out falsy values from the array.
//Input: [NaN, 0, 15, false, -22, "", undefined, 47, null]
//Output: [15, -22, 47]

function falsyFilter (a) {
    let output = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== null && a[i] !== undefined && a[i] !== "" && a[i] !== false && !isNaN(a[i]) && a[i] !== 0) {
            output.push(a[i]);
    }
}

return output;
}
arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log(falsyFilter (arr));



//Write a program that calculates a number of integer values in the array.
//Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
//Output: 3

function intCounter (a) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (parseInt(a[i]) && a[i] % 1 == 0){
            counter ++;
        }
    }

    return counter;
}

arr = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
console.log(intCounter(arr));



//Write a program that calculates a number of float values in the array.
//Input: [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
//Output: 2

function floatCounter (a) {
    let counter = 0;
    for (let i = 0; i < a.length; i++) {
        if (parseFloat(a[i])){
            counter ++;
        }
    }

    return counter;
}

arr = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null]
console.log(floatCounter(arr));