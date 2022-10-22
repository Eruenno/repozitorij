var a;
var b;
var c;
var a=3;
var b=4;
var c=5;

if (a==b && b==c)
{
console.log("Triangle is equilateral")
}

else if (a==b || b==c || c==a) {
    console.log("Triangle is isosceles")
}

else {
    console.log("Triangle is scalene")
}