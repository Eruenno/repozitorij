var x;
var x = 0;
var y;
var y = 0;


for (var x = 0; x <= 1000; x++) {

if (x % 3 === 0 || x % 5 === 0) {
    y += x
}
}

console.log(y)