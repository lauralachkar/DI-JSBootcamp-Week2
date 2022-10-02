//Exercise 1

let people = ["Greg", "Mary", "Devon", "James"];
delete people[0];

people.push("Jason");
people.push("Laura");
console.log(people);

let getIndex = people.indexOf("Mary");
let copyArray = people.slice(2,-1);
let getSecondIndex = people.indexOf("Foo");
let lastItem = people[people.length - 1];

console.log(getIndex);
console.log(copyArray);
console.log(getSecondIndex);
console.log(lastItem);

//Part 2


for (let peoples of people) {
	console.log(people);
}

for(let i = 0; i <people.length-1; i++){ 
    console.log(people[i]);
}

//Exercise 3

var number = parseInt(prompt("Please enter a number"));


while(number < 10) {
    // take input again if the number is under 10
    number = parseInt(prompt('Enter a number: '));
    
}
console.log(number);

//Exercise 4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
console.log("Numbers of floors in the building : " + building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);



console.log("Name of the second Tenant :"+building.nameOfTenants[1]);
console.log("Numbers of Dan's rooms:"+building.numberOfRoomsAndRent.dan[0]);



let sarahAndDavidRent = building.numberOfRoomsAndRent.sarah[0] + building.numberOfRoomsAndRent.david[0]
let danRent = building.numberOfRoomsAndRent.dan[0]


if (sarahAndDavidRent >danRent){
    console.log(danRent +1200)
}else {
    console.log("FALSE")
}

//Exercise 5


let family = {
    dad : "Patrick",
    mother : "Valerie",
    sister : "Charlotte",
    me : "Laura",
    grandpa : "Roger",
    grandma : "Marlene",
}

for (const key in family) {

    console.log(`${key}`);
}


Object.values(family).forEach(val => console.log(val));