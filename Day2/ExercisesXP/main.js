//Exercise 1

let x = 5;
let y = 2;

if(x > y || y > x){
    console.log(x +" "+ "is the biggest number" || y + "is the biggest number")
}

//Exercise 2

let newDog = "Chihuahua";
let countCharacters = newDog.trim().length;
console.log(countCharacters)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if(newDog.length == 0){
    console.log("I dont care,I prefer cats");
}else{
    console.log("I love Chihuahuas, it’s my favorite dog breed")
}

//Exercise 3

// program to check if the number is even or odd
// take input from the user
const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}

//Exercise 2

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let lessThanOne = "no one is online";
letOneUser = users[0]
letTwoUser = users[1]

for (let index = 0; index < users.length; index++) {
    if (users[index] == 0) {
       lessThanOne
    }else if(users[index] == 1){
        letOneUser
    }else if(users[index] == 2){
        letTwoUser
    }
}

 console.log(lessThanOne)
 console.log(letOneUser + "is online")
 console.log(letOneUser +" "+"and"+" "+letTwoUser+" "+"are online")