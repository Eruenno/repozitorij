var David;
var Marko;
var Dany;
var John;
var Thomas;
var a;

var David = 80;
var Marko = 77;
var Dany = 88;
var John = 95;
var Thomas = 68;
var a = [David, Marko, Dany, John, Thomas];
var x;
var x = 0
var prosek;
var prosek = 0;

for (x = 0; x < a.length; x += 1) {

prosek += a[x];

}
prosek /= 5;
console.log(prosek);

if (prosek < 50)
    {
        console.log("Nemaju pojma");
    }
    else if (prosek <=61 && prosek >50)
        {
            console.log("Average grade is E");
        }
    else if (prosek <=71 && prosek >60)
        {
            console.log("Average grade is D");
        }
    else if (prosek <=81 && prosek >70)
        {
            console.log("Average grade is C");
        }
    else if (prosek <=91 && prosek >80)
        {
            console.log("Average grade is B");
        }
    else if (prosek <=100 && prosek >90)
        {
            console.log("Average grade is A");
        }