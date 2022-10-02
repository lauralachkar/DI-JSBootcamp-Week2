//Exercise 1

const str = '';

if (typeof str === 'string' && str.length === 0) {
  console.log('string is empty');
} else {
  console.log('string is NOT empty')
}

//Exercise2

abbrev_name = function (str1) {
    var split_names = str1.trim().split(" ");
    if (split_names.length > 1) {
        return (split_names[0] + " " + split_names[1].charAt(0) + ".");
    }
    return split_names[0];
};
console.log(abbrev_name("Robin Singh"));


//Exercise3

function swap(str) {
    let newLetters = '';
    for (let i = 0; i < str.length; i++) {
            if (str[i] == str[i].toUpperCase()) {
                newLetters += str[i].toLowerCase();
            } else {
                newLetters += str[i].toUpperCase();
            }
        }
        console.log(newLetters);
        return newLetters;
    }
    console.log(swap('The Quick Brown Fox')); 
    console.log(swap('So, today we have REALLY good day'));


//Exercise4    

    // using a simple for-iterator
function IsItemOmnipresent(arrayOfArrays, item, present = false) {  
    for (const e of arrayOfArrays) {
      if (typeof e === 'object' && e.length) {
        return IsItemOmnipresent(e, item, present);
      }
      else {
          present = e === item;
      }
    }
  
    return present;
  }
  

  function IsItemOmnipresent(arrayOfArrays, item) {
    let isPresent = function (present, e) {
      if (typeof e === 'object' && e.length) {
        return IsItemOmnipresent(e, item);
      }
      else {
        present = e === item;
      }
  
      return present;
    };
  
    return arrayOfArrays.reduce(isPresent, false);  
  }
  
  console.log(IsItemOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) //true
  console.log(IsItemOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) // false
  console.log(IsItemOmnipresent([[5], [5], [5], [6, 5]], 5)) // true
  console.log(IsItemOmnipresent([[5], [5], [5], [6, 5]], 6)) // false
  console.log(IsItemOmnipresent([[5, 1], [5, 1], [5, 1], [6, 5, 1]], 1)) // true