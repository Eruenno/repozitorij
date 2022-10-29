//Write a code to find the sum of first 10 natural numbers and show that sum on screen.
var a;
var a = 1;
var sum;
var sum = 0;

for (a = 1; a < 11; a++)
{
    sum += a
}

console.log(sum)



//Write a code to display the cube of the number up to given an integer and show it on screen. Example: 2 up to cube equals 8.
var a;
var a = 0;
var b;
var b = 5;

for (a = 0; a < b; a++)
{
    console.log(a * a * a);
    console.log(" ");
}



//Write a code to calculate the factorial of a given number and show it on screen. Example: The Factorial of 5 is 120.
var b = 6;
var c;
var c = 1

for (b; b > 0; b--)
{
    c *= b;
}
console.log(c);



//Write a code to display the n terms of even natural number and their sum. Example: Input number of terms - 5. Expected output: "The even numbers are 2, 4, 6, 8, 10".
var a = 1;
var b = 9;

for (a = 1; a <= b; a++)
{
    if (a % 2 == 0)
    console.log(a);
}



//Write a code to calculate the sum of digits in a number and show that sum on screen. Example: "Sum of digits in number 232 is 7".
var x;
var x = 0;
var a = 4143413;
var b = a.toString();
console.log (a);
var zbir;
var zbir = 0;
var broj;
var broj = 0;

for (x = 0; x < b.length; x += 1)
{
var broj = parseInt (b[x], 10);
zbir += broj;
}
console.log(zbir);



//Write a code to count all letters in a word and show that count on screen. Example: Given word is "Eclip542se". Result should be something like "There is 7 letters in this word"

var a;
var b = "";
var b = "Eclip542se";
var brojSlova = 0;

for (let broj = 0; broj < b.length; broj++)
{
    var a = parseInt (b[broj], 10);
    if (isNaN(a))
    {
        brojSlova ++;
    }
}
console.log(brojSlova);



//Write a code to find on which index in array is letter "C" and show that index on screen. Given array is: [1, 3, 32, $, g, h, t, s, c, 66, 23, h2].

var a = [1, 3, 32, 6, "&", "h", "t", "s", "c", "66", 23, "h2"];
var pozicija;
var pozicija = 0;

let counter = 0
for (counter = 0; counter < a.length; counter++)
{
    if (a[counter] === "c"){
        pozicija = counter + 1;
    console.log("Slovo C se nalazi na poziciji " + pozicija);
    }
}



//Exercises Loops 2
//Write a program that checks if a given element e is in the array a. Input: e = 3, a = [5, -4.2, 3, 7] Output: yes

var a = [5, -4.2, 3, 7];
var e = 3;
var b = false

for (let i = 0; i<a.length; i++) {
    if (e = a[i]) {
        var b = true;
    }
}
if (b) {
    console.log("Yes")
}
else {
    console.log("No")
}



// Write a program that multiplies every positive element of a given array by 2. Input array: [-3, 11, 5, 3.4, -8] Output array: [-3, 22, 10, 6.8, -8]

var a = [-3, 11, 5, 3.4, -8];

for (let i = 0; i<a.length; i++) {
    if (a[i] > 0) {
        a[i] *= 2;
    }
}
console.log(a);



//Write a program that finds the minimum of a given array and prints out its value and index. Input array: [4, 2, 2, -1, 6] Output: -1, 3

var a = [4, 2, 2, -1, 6];
var least = a[0];
var position = 0;

for (let i = 0; i<a.length; i++) {
    if (a[i] < least) {
        least = a[i];
        position = i;
    }
}
console.log(least, position);



//Write a program that finds the first element larger than minimum and prints out its value. Input array: [4, 2, 2, -1, 6] Output: 2

var a = [4, 2, 2, -1, 6];
var leastPos = a[0];
var b = [];

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

console.log(leastPos)

// ili

let a = [4, 2, 2, -1, 6];
var b;

a.sort();

for (let i = 0; i < a.length; i++)
    if (a[i] >= a[0] && i !=0) {
// Moze da bude bez = i &&, zavisi da li drugi najmanji clan mora striktno biti drugaciji od najmanjeg ili je dovoljno da je samo u sortiranom nizu drugi po redu.
        b = a[i]
        break;
    }

console.log("smallest element is", a[0]);
console.log("second smallest element is", b);

        //Ovde nesto gadno ne valja

var a = [4, 2, 2, -1, 6];
var leastPos = a[0];
var secondLeast = a[0];

for (let i = 0; i < a.length; i++) {
    if (a[i] < leastPos) {
        leastPos = i;
    }
}

for (let i = 0; i<a.length; i++) {
if (a[i] > a[leastPos] && a[i] < secondLeast) {
    secondLeast = a[i];
    }
}
console.log(leastPos);
console.log(a[secondLeast]);



//Write a program that calculates the sum of positive elements in the array. Input array: [3, 11, -5, -3, 2] Output: 16

var a = [3, 11, -5, -3, 2];
var sum = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum += a[i];
    }
}
console.log(sum);



//Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side. Input array: [2, 4, -2, 7, -2, 4, 2] Output: The array is symmetric.

var a = [2, 4, -2, 7, -2, 4, 2];
var sym = false;

    for (var i = 0; i < a.length; i++) {
        if  (a[i] == a[(a.length - 1) - i])
        sym = true;
        else {
            sym = false;
            break;
        }
    }
if (sym) {
    console.log("The array is symmetric.")
}

// ili

var a = [2, 4, -2, 7, -2, 4, 2];
var b = [];
var c;
var d;

    for (let i = a.length - 1; i >= 0; i--) {
        b.push(a[i]);
    }

var c = a.join("")
var b = b.join("")

if (c==b) {
    console.log("The array is symmetric.")
}
else {
    console.log("The array is not symmetric.")
}



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
var c = []
c.length = a.length + b.length;

for (let i = 0; i < a.length; i++) {
    c[i] = a[i];
}

for (let i = 1; i < a.length; i*2) {
    c[i*2] = b[i];
}

console.log(c)



//Write a program that deletes a given element e from the array a. Input: e = 2, a = [4, 6, 2, 8, 2, 2] Output array: [4, 6, 8]

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b = [];

for (let i = 0; i < a.length; i++) {
    if (a[i] != e) {
        b += a[i];
    }
}
console.log(b);

        // ili - slice ne vraca "pravi" arr?

var e = 2;
var a = [4, 6, 2, 8, 2, 2];
var b;
var b = [];


var b = a.slice(0, e) + a.slice(e+1, a.length);

console.log(b);



//Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8] Output: [2, -2, 33, 78, 12, 5, 8]

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];

if (p <= a.length && p >= 0) {
    for(i = a.length; i > p; i--) {
        a[i] = a[i-1];
    }
    a[p] = e;
} else {
    console.log('error');
}

console.log(a);

// ili

var a = [2, -2, 33, 12, 5, 8]
var e = 78;
var p = 3;

a.splice(p, 0, e)
console.log(a);