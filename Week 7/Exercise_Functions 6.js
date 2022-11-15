//Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

function vowelCounter (a) {

    let vowelCount = 0;

    for (let i = 0; i < a.length; i++) {

        var element = a[i].toLowerCase();
        if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u") {
        vowelCount ++;
    }
    }

    return vowelCount;
}

var str = "blAble";
console.log(vowelCounter(str));



//Write a function that combines two arrays by alternatingly taking elements.
//[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function arrConcat (a, b) {
    let c = [];
    for (let i = 0; i < a.length; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }

    return c;
}

var a = ["a","b","c"];
var b = [1,2,3];
console.log(arrConcat(a,b));



//Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function listRotator (a, k) {
    let c = [];
    for (let i = k; i < a.length; i++) {
        c.push(a[i]);
    }
    for (let i = 0; i < k; i++) {
        c.push(a[i]);
    }


    return c;
}

var a = [1,2,3,4,5,6];
var b = 2;
console.log(listRotator(a,b));



//Write a function that takes a number and returns array of its digits.

function numberToDigits (a) {

    let str = a + "";
    let b = [];

    for (let i = 0; i < str.length; i++) {
        b.push(str[i]);

    }


    return b;
}

var a = 1232;
console.log(numberToDigits(a));



//Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable(a) {

    for (let i = 0; i < a; i++) {

        for (let j = i; j < a; j++) {

            console.log(i * j);

        }
    }

    return
}

a = 5;
multiplicationTable(a)