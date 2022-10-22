var a;
var result = '';


console.log("I love the smell of napalm in the morning (⌐■_■)")


var a = "Belgrade";

switch (a) {
    case 'Brussels':
    case 'Antwerp':
    case 'Bruges':
        result = "Excellent choice, Belgium has been nuked. Aftica rejoices. The world is a better place."
            break;
    case 'London':
    case 'Liverpool':
    case 'Birmingham':
        result = "A most jolly occasion. The br*tish are no more. The world is a brither place today. Literally."
            break;
    case 'Berlin':
    case 'Munich':
    case 'Hamburg':
        result = "The g*rmans have been glassed. The slavs are overjoyed. Alas, the eternal anglo remains. Let the best man win. Siri, play DOOM music."
            break;
    case 'Paris':
    case 'Marseille':
    case 'Strasbourg':
        result = "The french have been cooked. Take that, frogs. This one is for Louis XVI!"
            break;
    case 'Shanghai':
    case 'Beijing':
    case 'Shenzhen':
        result = "With this character's death, the thread of prophecy is severed. Restore a saved game to restore the weave of fate, or persist in the doomed world you have created."
            break;
    default: 
        result = "You cannot nuke this city.";
            break;
    }

    console.log(result)