//Write a program that checks if a given element e is in the array a. Input: e = 3, a = [5, -4.2, 3, 7] Output: yes

function elementCheck(a, element) {
    let b = false
    
    for (let i = 0; i < a.length; i++) {
        if (e = a[i]) {
            b = true;
        }
    }
    if (b) {
        return "Yes"
    }
    else {
        return "No"
    }


}

var a = [5, -4.2, 3, 7];
var element = 3;
console.log(elementCheck(a, element));



// Write a program that multiplies every positive element of a given array by 2. Input array: [-3, 11, 5, 3.4, -8] Output array: [-3, 22, 10, 6.8, -8]

function positiveMultiply(a) {

for (let i = 0; i<a.length; i++) {
    if (a[i] > 0) {
        a[i] *= 2;
    }
}
return a;


}

var a = [-3, 11, 5, 3.4, -8];
console.log(positiveMultiply(a));



//Write a program that finds the minimum of a given array and prints out its value and index. Input array: [4, 2, 2, -1, 6] Output: -1, 3

function minimumAndIndex(a){

let least = a[0];
let position = 0;

for (let i = 0; i<a.length; i++) {
    if (a[i] < least) {
        least = a[i];
        position = i;
    }
}

let solution = position.toString() + "," + least.toString();
return solution;


}

var a = [4, 2, 2, -1, 6];
console.log(minimumAndIndex(a));

//Write a program that finds the first element larger than minimum and prints out its value. Input array: [4, 2, 2, -1, 6] Output: 2

function secondLeast(a) {
    let leastPos = a[0];
    let b = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] < leastPos) {
        leastPos = i;
    }
}
for (let i = 0; i < a.length; i++) {
    if (a[i] != a[leastPos]) {
        b.push(a[i])
    }
}
leastPos = b[0];
for (let i = 0; i < b.length; i++) {
    if (b[i] < leastPos) {
        leastPos = b[i];
    }
}


return leastPos;
}

var a = [4, 2, 2, -1, 6];
console.log(secondLeast(a));



//Write a program that calculates the sum of positive elements in the array. Input array: [3, 11, -5, -3, 2] Output: 16

function sumPositives(a) {
let sum = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum += a[i];
    }
}


return sum;
}

var a = [3, 11, -5, -3, 2];
console.log(sumPositives(a));



//Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side. Input array: [2, 4, -2, 7, -2, 4, 2] Output: The array is symmetric.

function symmetricCheck(a) {
let sym = false;

    for (var i = 0; i < a.length; i++) {
        if  (a[i] == a[(a.length - 1) - i])
        sym = true;
        else {
            sym = false;
            break;
        }
    }

if (sym) {
    return "The array is symmetric."
}
else {
    return "the array is not symmetric."
}

}

var a = [2, 4, -2, 7, -2, 4, 2];
console.log(symmetricCheck(a));

// ili

function symmetricCheck(a) {

let b = [];
let c;

    for (let i = a.length - 1; i >= 0; i--) {
        b.push(a[i]);
    }

c = a.join("")
b = b.join("")

if (c == b) {
    return "The array is symmetric."
}
else {
    return "The array is not symmetric."
}


}

var a = [2, 4, -2, 7, -2, 4, 2];
console.log(symmetricCheck(a));



//Write a program that intertwines two arrays. You can assume the arrays are of the same length. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = []

for (let i = 0; i < a.length; i++) {
    c.push(a[i]);
    c.push(b[i]);
}
console.log(c);



            //Write a program that concatenates two arrays. Input arrays: [4, 5, 6, 2], [3, 8, 11, 9] Output array: [4, 5, 6, 2, 3, 8, 11, 9]

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];
var c = [];
c.length = a.length + b.length;

for (let i = 0; i < c.length; i*2) {
    c[i] = a[i];
}

for (let i = 1; i < c.length; i++) {
    c[i*2] = b[i];
    i++
}

console.log(c);



//Write a program that deletes a given element e from the array a. Input: e = 2, a = [4, 6, 2, 8, 2, 2] Output array: [4, 6, 8]

function elementDelete (a, element) {

let b = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] != element) {
        b += a[i];
    }
}


return b;
}

var element = 2;
var a = [4, 6, 2, 8, 2, 2];
console.log(elementDelete(a, element));



        // ili - slice ne vraca "pravi" arr?

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b;
var b = [];


var b = a.slice(0, e) + a.slice(e+1, a.length);

console.log(b);



//Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8] Output: [2, -2, 33, 78, 12, 5, 8]

function elementInsert(element, position, a) {
if (position <= a.length && position >= 0) {
    for(i = a.length; i > position; i--) {
        a[i] = a[i-1];
    }
    a[position] = element;
} 
else {
    return "error";
}

return a;
}

var element = 78;
var position = 3;
var a = [2, -2, 33, 12, 5, 8];

console.log(elementInsert(element, position, a));

// ili - ali ovo nema nikakvu poentu...

function elementInsert (element, position, a) {

a.splice(position, 0, element)
return a
}

var a = [2, -2, 33, 12, 5, 8]
var element = 78;
var position = 3;
console.log(elementInsert(element, position, a));