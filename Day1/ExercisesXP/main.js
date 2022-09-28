//Exercise 1 

let favoriteFood = "pasta";
let favroiteMealOfTheDay = "lunch";
console.log("I eat" + " "+favoriteFood+ " "+ "at every"+" "+favroiteMealOfTheDay)

//Exercise 2

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLenght = myWatchedSeries.length;
console.log("the number of series in the array is:"+myWatchedSeriesLenght);

let myWatchedSeriesSentence = myWatchedSeries.join(", ");
let finalSentence = "I watched" +" "+myWatchedSeriesLenght +" "+"series"+":"+ myWatchedSeriesSentence;
console.log(finalSentence)

//Part 2


myWatchedSeries[myWatchedSeries.length-1]="friends";
myWatchedSeries.push("heroes")
myWatchedSeries.unshift("arrow")
console.log(myWatchedSeries)
delete myWatchedSeries[1]
console.log(myWatchedSeries)

//Exercise 3

function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

cToF(60);

//Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C
//Celsius to Fahrenheit : (°C × 1.8) + 32 = °F

//Exercise4
let c;
    let a = 34;
    let b = 21;

    console.log(a+b)

//The outcome will be 55
a = 2
console.log(a+b)
//The outcome will be 23
console.log(3 + 4 + '5');
//The outcome will be 75