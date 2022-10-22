var array = [1, 2, 3, 34543, 837, 7347]
var m;
var s;
var x;
var x = 0;
var s = 0;
var m = 1;

for (x = 0; x < array.length; x +=1) {
s += array[x];
m *= array[x];
}
console.log('Rezultat pomnozenih clanova u nizu je ' + m)
console.log('Rezultat zbira svih clanova niza je ' + s)