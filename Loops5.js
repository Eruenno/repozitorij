var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
var x;
var x = 0;
var y;
var y = 0;
var niz;
var niz = "";

for (x = 0; x < a.length; x += 1) {

    for (y = 0; y < a[x].length; y += 1) {
        niz += " ";
        niz += a[x][y];
    }
}
console.log(niz)
