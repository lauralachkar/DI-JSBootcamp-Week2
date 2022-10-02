//Exercise 1

function infoAboutMe(){
    console.log("My name is Laura,I'm 25 years old,my hobbies are travelling sports..")
}

infoAboutMe()

function infoAboutPerson(personName, personAge, 
    personFavoriteColor){
    console.log("You name is"+personName+"you are"+
    personAge+"years old"+"your favorite color is"+
    personFavoriteColor)
}

infoAboutPerson("David",45,"blue");
infoAboutPerson("Josh", 12, "yellow");

//Exercise 2

function checkBillAndTip(){
    let billAmount = Number(prompt("Amount of the bill : "));
    let tip;
    if (billAmount <50){
        tip = billAmount * 0.2;
        prompt(billAmount + tip)
    }
    else if(billAmount>=50<200){
        tip = billAmount * 0.15;
        prompt(billAmount + tip)
    }
    else if(billAmount>200){
        tip = billAmount * 0.10;
        prompt(billAmount + tip)
    }
}

checkBillAndTip(20)


// //Exercise 3

// function isDivisible(){
//     for(let i = 0; i <= 500; i++) {
//        alert(i);
//     }
// }

// isDivisible()

// function isDivisible(){
//    for(let i = 0; i <=500; i++) {
//        if(i % 23 === 0){
//            alert("This number is divisible by 23 ")
//        }else {
//            alert("FALSE")
//        }
//    }
// }


// isDivisible()

