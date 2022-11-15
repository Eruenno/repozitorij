

//Write a function to find a word within a string.
//"The quick brown fox", "fox" -> "'fox' was found 1 times." 

function wordCount(a, b) {
    let counter = 0;

    for (let i = 0; i < a.length; i++) {

        for (let j = i; j < a.length; j++)
        {
            if (a[i] == b[j] && j == b.length)
            {
                counter ++;
            }
            else if (a[i] == b[j])
            {
                counter ++;
            }
            }
        }
        j = 0;

        return b + " was found " + counter + " times."
}


a = "The quick brown fox."
b = "fox"
console.log(wordCount(a, b))


//Write a function to hide email address.
//"myemailaddress@bgit.rs"
// "mye...@bgit.rs"

function emailHide (a) {
    var hidden = "";

        for (let i = 0; i < 3; i++) {
                hidden += a[i];
        }

        hidden += "..."

        var index = 0;

        for (let i = 0; i < a.length; i++) {
            if (a[i] == "@")
            index = i;
        }

        for (let i = index; i < a.length; i++) {
            hidden += a[i];
        }
        return hidden;
}


var a = 'msdaseaddress@bgit.rs';
console.log(emailHide(a));



//Write a program to find the most frequent item of an array.
//[3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]

function mostFrequent (a) {
    let item;
    let frequency = 0;
    let newfreq = 1;

    for (let i = 0; i < a.length; i++) 
    {

        for (let j = i; j < a.length; j++) 
        {
            if (a[i] == a[j]) 
            {
                frequency ++;
            }
            if (newfreq < frequency)
            {
                newfreq = frequency;
                item = a[i];
            }
        }
        frequency = 0;
    } 
    return item;
}

var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
console.log(mostFrequent(arr));

