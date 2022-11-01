function sum (a, b) {
    return a + b;
}

var result = sum (3, 4);
console.log(result);


function sumUpdate () {
    var args = arguments;
    var result = 0;
    for (let i = 0; i < args.length; i++) {
        var value = args[i +""];
        console.log(value);
        result += value;
    }


    return result;
}

var sumA = sumUpdate(1, 2, 3, 4, 5);
console.log(sumA);



//Write a program that calculates the maximum of two given numbers.

function maximum (a, b) {
    if (a > b) {
        return ("a is greater than b");
    }
    else if (b > a) {
        return ("b is greater than a");
    }
    else {
        return ("a is equal to b");
    }


}
var primer;
var primer = maximum (4, 5);
console.log(primer);


//Write a program that checks if a given number is odd.

function oddNum (a) {
    if (a % 2 == 0) {
        return ("The number is even.");
    }
    else {
        return ("The number is odd.");
    }


}

var primer;
var primer = oddNum (7);
console.log(primer);
var primer = oddNum (6);
console.log(primer);


//Write a program that checks if a given number is a three digit long number.

function digits (a) {
    if (a > 99 && a < 1000) {
        return ("The number has 3 digits.");
    }
    else {
        return ("The number has more or less digits than 3.")
    }


}

var primer;
var primer = digits (99);
console.log(primer);
var primer = digits (160);
console.log(primer);
var primer = digits (32312329);
console.log(primer);


//Write a program that calculates an arithmetic mean of four numbers.

function mean (a, b, c, d) {
    let sum = a + b + c + d;
    return sum / 2;

}

var primer;
var primer = mean (2, 2, 2, 2);
console.log(primer);
var primer = mean (2, 2);
console.log(primer);
var primer = mean (7, 5, 4, 9);
console.log(primer);


//Write a program that draws a square of a given size. For example, if the size of square
//is 5 the program should draw:
//*****
//*   *
//*   *
//*   *
//*****

function square (a) {

    let polje = "";
for (let i = 0; i < a; i++) {

    for (let j = 0; j < a; j++) {
        if (j == 0 || i == 0) {
            polje += "*";
        }
        else if (j == a - 1 || i == a - 1) {
            polje += "*";
        }
        else {
            polje += " ";
        }
        
    }
    console.log(polje);
    polje = "";
}

return polje;
}


var primer;
var primer = square (7);
console.log(primer);



//Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *

function chart(a, b, c) {
    let polje = "";
    for (let i = 0; i < a; i++) {
        polje += "*";
    }
    console.log(polje);
    polje = "";
    for (let i = 0; i < b; i++) {
        polje += "*";
    }
    console.log(polje);
    polje = "";
    for (let i = 0; i < c; i++) {
        polje += "*";
    }
    console.log(polje);
    polje = "";

}
    var primer;
    var primer = chart(5, 6, 2);
    console.log(primer);

    // ili

function chart (a, b, c) {

function red () {
    var args = arguments;
        let y = "";
        for (let i = 0; i < args; i++) {
            y += "* ";
        }
    
        return y;


};

let resenje = "";
resenje = red();
console.log(resenje);

}

var primer;
var primer = chart (4, 5, 7);
console.log(primer);

//Write a program that calculates a number of digits of a given number.

function digits (a) {

return a.toString().length

}

var primer;
var primer = digits(15);
console.log(primer);



//Write a program that calculates a number of appearances of a given number in a given array.
//Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7 Result: 3

a = [2, 4, 7, 8, 3, 7, 1];
broj = 0;

function arrCounter (e) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] == e) {
            broj++;
        }
    }


    return broj;
}


var primer;
var primer = arrCounter (7);
console.log(primer);



//Write a program that calculates the sum of odd elements of a given array.

function arrCounter (a) {
    var broj = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            broj++;
        }
    }

    return broj;
} 

a = [8, 7, 5, 3]
var primer;
var primer = arrCounter (a);
console.log(primer);



//Write a program that calculates the number of appearances of a letter a in a given string.
//Modify the program so it calculates the number of both letters a and A.

function stringCounter (a) {
    var broj = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == "a" || a[i] == "A") {
            broj++;
        }
    }

    return broj;

}

var a = "DžarabArA";
var primer;
var primer = stringCounter (a);
console.log(primer);



//Write a program that concatenates a given string given number of times. 
//For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.

function stringConcat (a, b) {
    let c = "";
    for (let i = 0; i < b; i++) {
        c += a;
    }

    return c;

}

var primer;
var primer = stringConcat ("abc", 9);
console.log(primer);



//Write a function to check whether the `input` is a string or not.
//"My random string" -> true       12 -> false


function stringCheck (a) {
    let b = "";
    if (typeof(a) == typeof(b)) {
        return true;
    }
    else {
        return false;
    }

}
    
    var primer;
    var primer = stringCheck(12);
    console.log(primer);



//Write a function to check whether a string is blank or not.

function stringCheck (a) {
    let b = " ";
    if (a === b) {
        return true;
    }
    else {
        return false;
    }

}
    
    var primer;
    var primer = stringCheck(" ");
    console.log(primer);



//Write a function that concatenates a given string n times (default is 1). "Ha", 3 = "HaHaHa".

function stringConcat (a, b) {
    let c = "";
    for (let i = 0; i < b; i++) {
        c += a;
    }
    
    return c;
    
}
    
var primer;
var primer = stringConcat ("Ha", 3);
console.log(primer);



//Write a function to count the number of letter occurrences in a string.
//"My random string", "n" = 2


var a = "";
function stringCounter (a, b) {
    let broj = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b) {
            broj++;
        }
    }

    return broj;

}

var a = "My random string";
var b = "n";
var primer;
var primer = stringCounter (a, b);
console.log(primer);



//Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.

var a = "";
function stringCounter (a, b) {
    let pozicija = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b) {
            pozicija = i;
            break;
        }
    }

    return pozicija;

}

var a = "My random string";
var b = "n";
var primer;
var primer = stringCounter (a, b);
console.log(primer);



// Write a function to find the position of the last occurrence of a character in a string.
//The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

var a = "";
function stringCounter (a, b) {
    let pozicija = 0;
    for (let i = a.length; i > 0; i--) {
        if (a[i] == b) {
            pozicija = i + 1;
            break;
        }
    }

    return pozicija;

}

var a = "My random string";
var b = "n";
var primer;
var primer = stringCounter (a, b);
console.log(primer);



        //Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
        //"My random string" -> ["M", "y", "r", ...]

function srtingArrayer (a) {


}

Push 



//Write a function that accepts a number as a parameter and checks if the number is prime or not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


function primeCheck(a) {

  if (a===1) {
    return false;
  }
    else if(a === 2) {
    return true;
  }
  else {
    for(var i = 2; i < a; i++) {
      if(a % i === 0)
      {
        return false;
      }
    }
    return true;  
  }


}

var a = 6
var primer;
var primer = primeCheck(a);
console.log(primer);



        // Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
// "My random string", "_" -> "My_random_string"

function stringConnect (a, b) {

// if (b = "") {
//     b = "-";
// }

for (let i = 0; i < a.length; i++) {
    if (a[i] == " ") {
        a[i] = b;
    }
}

return a;
}

var a = "My random string";
var b = "_";
var primer;
var primer = stringConnect (a, b);
console.log(primer);