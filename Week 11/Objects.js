// Objects_Intro exercises

//Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

const coffee = {
name: "smth",
strength: 15,
flavour: "spicy",
sugar: "yes",
milk: "no",
cup: "plastic"
}



//Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

const movie = {
name: "Blade Runner",
actors: [ "Harrison Ford", "Rutger Hauer", "Sean Young", "Edward James Olmos" ],
director: "Ridley Scott",
genre: "Sci-Fi",
popularity: "8/10"
}



//Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function projectCreate() {
    project = {};
    project.description = "This project aims to automate paperclip production.";
    project.language = "JavaScript";
    project["Git Repository"] = "INSERT LINK HERE";
    project["In Development:"] = false;
    return project
}

console.log(projectCreate());



//Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

var groceries = [
{
product: "Milk",
quantity: 1,
price: 1.50
},
{
product: "Eggs",
quantity: 6,
price: 2.10 
},
{
product: "Bread",
quantity: 1,
price: 1.5 
},
{
product: "Cheese",
quantity: 1,
price: 6.30
}
]


function getTotalPrice(groceries) {
    let total = 0;
    groceries.forEach((x) => {
      total =  total + (x.price * x.quantity)
    })
    var result = parseFloat(total).toFixed( 2 );
    return Number(result)
};

console.log(getTotalPrice(groceries));



//You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price. Create a function that gets the name of the piece of jewelry with the highest price and returns: The most expensive one is the {name of jewelry piece}. 
//Example: mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold watch’, price:250}, …])
//The most expensive one is the diamond ring.

jewleryList = [{name:'Diamond Earings', price: 980}, {name:'Gold watch', price: 250}, {name: 'Pearl Necklace', price: 560}];

function getTotalPrice(jewleryList) {
    let theMostExpensive = "";

    jewleryList.forEach((x) => {
        let priceFloat = parseFloat(x.price);
        
        if (theMostExpensive < priceFloat) {
        theMostExpensive = x.name;
        }
        return theMostExpensive;
    })
    return "The most expensive one is " +  theMostExpensive;
}

console.log(getTotalPrice(jewleryList));



//Given a word, create an object that stores the indexes of each letter in an array. Make sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes are stored in an array and those arrays are values.
//Examples: mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] } mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

letterCount = [{name:'Diamond Earings', price: 980}, {name:'Gold watch', price: 250}, {name: 'Pearl Necklace', price: 560}];

function getTotalPrice(jewleryList) {
    let theMostExpensive = "";

    jewleryList.forEach((x) => {
        let priceFloat = parseFloat(x.price);
        
        if (theMostExpensive < priceFloat) {
        theMostExpensive = x.name;
        }
        return theMostExpensive;
    })
    return "The most expensive one is " +  theMostExpensive;
}

console.log(getTotalPrice(jewleryList));



//Given a word, create an object that stores the indexes of each letter in an array. Make sure the letters are the keys. Make sure the letters are symbols. Make sure the indexes are stored in an array and those arrays are values.
//Examples: mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] } 
//mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
//mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }

function letterCount(word) {
    var object = {};
    for (let i = 0; i < word.length; i++) {
        if (object[word[i]]) {
            continue;
        }
        var arr = [i];
        for (let j = 0; j < word.length; j++) {
            if (word[i] == word[j] && i != j) {
                arr.push(j);
            }
        }
        object[word[i]] = arr;
    }
    return object;
}

console.log(letterCount("dodo"));



//And who cursed the most in the fight between you and your spouse? Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most: If you, return "ME!" If your spouse, return "SPOUSE!"; If a draw, return "DRAW!"
//Examples: determineWhoCursedTheMost([{me: 10, spouse: 5 }, { me: 5, spouse: 10 }, { me: 0, spouse: 10, }]) ➞ DRAW!
//determineWhoCursedTheMost([{me: 40,spouse: 5}, {me: 9, spouse: 10}, { me: 9, spouse: 10}]) ➞ "ME!"
//determineWhoCursedTheMost([{ me: 10,spouse: 5 }, { me: 9, spouse: 44 }, { me: 10, spouse: 55}]) ➞ "SPOUSE!"

fights = [{me: 10, spouse: 5 }, { me: 55, spouse: 10 }, { me: 0, spouse: 10 }];

function determineWhoCursedTheMost(fights) {
    var myScore = 0;
    var mySpouseScore = 0;
    var charioteer = "";

    fights.forEach((x) => {
        myScore += parseFloat(x.me);
        mySpouseScore += parseFloat(x.spouse);
    })

    if (myScore > mySpouseScore) {
        charioteer = "ME!"
    }

    else if (mySpouseScore > myScore) {
        charioteer = "SPOUSE!"
    }

    else {
        charioteer = "DRAW!"
    }

    return charioteer;
}

console.log(determineWhoCursedTheMost(fights));

