//Find the min and max element in the following array and switch their places. Print out the modified array in the console.
//Input: [3, 500, 12, 149, 53, 414, 1, 19]
//Output: [3, 1, 12, 149, 53, 414, 500, 19]

function switchMinMax (a) {

    let least = a[0];
    let leastPosition = 0;
    let maximum = a[0];
    let maximumPosition = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] < least) {
            least = a[i];
            leastPosition = i;
        }
        else if (a[i] > maximum) {
            maximum = a[i];
            maximumPosition = i;
        }
    }

    let b = a[leastPosition];
    a [leastPosition] = maximum;
    a [maximumPosition] = b;


    return a;
}

a = [3, 500, 12, 149, 53, 414, 1, 19];

console.log(switchMinMax(a));



//Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
//Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
//Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

function arrayTransform(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== 0) {
        a[i] = a[i] / 2 + 5;
        }
        else {
            a[i] = 20
        }
    }
    return a;
}

var a = [3, 500, -10, 149, 53, 414, 0, 19];
console.log(arrayTransform(a));



//Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
//51-60 - 6, 61-70 - 7, 71-80 - 8, 81-90 - 9, 91-100 - 10.
//Input:["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
//Output: Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.

function grader(students, marks) {
    
    for (let i = 0; i < students.length; i++) {
        if (marks[i] <=61 && marks[i] >50)
        {
            //return students[i] + " has acquired " + marks[i] + " points and earned 6."
            console.log(students[i] + " has acquired " + marks[i] + " points and earned 6.");
        }
    else if (marks[i] <=71 && marks[i] >60)
        {
            console.log(students[i] + " has acquired " + marks[i] + " points and earned 7.");
        }
    else if (marks[i] <=81 && marks[i] >70)
        {
            console.log(students[i] + " has acquired " + marks[i] + " points and earned  8.");
        }
    else if (marks[i] <=91 && marks[i] >80)
        {
            console.log(students[i] + " has acquired " + marks[i] + " points and earned 9.");
        }
    else if (marks[i] <=100 && marks[i] >90)
        {
            console.log(students[i] + " has acquired " + marks[i] + " points and earned 10.");
        }
        else 
        {
            console.log(students[i] + " has acquired " + marks[i] + " points and failed to complete the exam.");
        }
    }

//return "All students have been graded."
}

var students = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var marks = [50, 39, 63, 72, 99, 51, 83, 59];
console.log(grader(students, marks));



//Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
//Output: 2350000


function math() {
    let result = 0;
    for (let i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            result += i;
        }
        else if (i % 2 !== 0 && i < 500) {
            result = result - i;
        }
    }
    result = result * 12.5;
    return result;
}

console.log(math());



//Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
//Input: ["A", "Anne", "Steve", "Joe", "David", "John", "Mark", true]
//Output: AnStJoJoDaMa

function firstTwoLetters (arr) {
    let output = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 1) {
            for (j = 0; j < 2; j++)[
                output += arr[i][j]
            ]
        }
    }


    return output
}

arr = ["A", "Anne", 12, "Steve", "Joe", "David", "John", "Mark", true];

console.log(firstTwoLetters (arr));



//Write a program that takes a string and prints its characters out in reversed order in the console.
//Input: Belgrade Institute of Technology
//Output: ygolonhceT fo etutitsnI edargleB

function reverseString (string) {
    let output = "";
    for (let i = string.length - 1; i >= 0; i--) {
        output += string[i];
    }


    return output
}
string ="Belgrade Institute of Technology"
console.log(reverseString(string));



//Write a program that displays all the combinations of two numbers between 1 and 7.
//Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function numCombinations () {
    let combinations = "";
    for (let i = 1; i < 8; i++) {
        for (let j = 1; j < 8; j++) {
            if (i !== j){

                combinations += "(" + i + ", " + j + ")" + ", "
            }
        }
    }
    return combinations
}

console.log(numCombinations ());



//Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
//Input: 17 | 15
//Output: true | false

function primeCheck (a) {
    let divisors = 0;
    for (let i = 1; i <= a; i++){
        if (a % i == 0) {
            divisors ++;
        }

    }
    if (divisors < 3) {
        return true;
    }
    else {
        return false;
    }
}

a = 6;
console.log(primeCheck(a));



//Check if a given string is a palindrome (spaces are ignored).
//Input: eye | Geek | a nut for a jar of tuna
//Output: true | false | true

function palindromeCheck (a) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    if (a == reverse){
        return true;
    }
    else {
        return false;
    }
}

string ="ZzZ"
console.log(palindromeCheck(string));



//Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
//Input: 192 42 | 81 9
//Output: 6 | 9

function greatestCommonDivisor (a, b){
    let lesser = a;
    let divisor = 1;
    if (a > b) {
        lesser = b
    }
    for (let i = 0; i <= lesser; i++) {
    if (a % i == 0 && b % i ==0){
        divisor = i;
    }
}

return divisor;
}

a = 9;
b = 15;
console.log(greatestCommonDivisor (a, b));



//Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
//Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

//Sort a previously defined array in a descending order and display it in the console.
//Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
//Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]