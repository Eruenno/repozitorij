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
