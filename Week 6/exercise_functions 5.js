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

return "All students have been graded."
}

var students = ["Michael", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"];
var marks = [50, 39, 63, 72, 99, 51, 83, 59];
console.log(grader(students, marks));



//Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
//Output: 2350000

function math() {
    let result = 0;
    for (let i = 0; i < 1000; i++) {
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

        //vraca 2337500 ???
