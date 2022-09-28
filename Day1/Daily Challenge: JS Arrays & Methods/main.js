//Exercise1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift()
fruits.sort()
fruits.push("Kiwi")
console.log(fruits)

function deleteValue(fruits){
    for(var i = 0; i<fruits.length; i++){
        if(fruits[i] === "Apples"){
            var spliced = fruits.splice(i,1)
            console.log(fruits)
        }
    }
}

deleteValue(fruits)

fruits.reverse()
console.log(fruits)

//Exercise2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1])