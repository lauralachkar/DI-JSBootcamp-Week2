function myFunction(){
    let text = prompt("Do you want to play?");
    if(text == "yes"){
        _checkUserAnswer()
    }else{
        alert("No problem,Goodbye!")
    }
}

function _checkUserAnswer(){
    number = parseInt(prompt("Please enter a number beetween 0 and 10:"));
    if(isNaN(number)){
        alert("Sorry Not a number,Goodbye!")
    }else if(number == 0 || number <= 10){
        alert("Sorry it's not a good number,Goodbye")
    }else if(number == 0 || number == 10){
        let minimum = 0;
        let maximum = 10;
        let computerNumber = Math.floor(Math.random() * maximum) + minimum;
        alert(computerNumber);
    }
}

