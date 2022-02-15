//reversing a string

const revStr = (str) => {
  return str.split("").reverse().join("");
};

//console.log(revStr("greettings"));

//finding palindroms
//reverse a string and check if it the same are the original string

const checkPalindrome = (str) => {
  return str === str.split("").reverse().join("") ? true : false;
};

//console.log(checkPalindrome("monica"));

//checking for prime numbers

const checkPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  let root = Math.ceil(Math.sqrt(num));
  for (let i = 2; i < root; i++) {
    if (num % i === 0) {
      return false;
    }

    return true;
  }
};

//console.log(checkPrime(10));
//sum of array values is greater than the largest value

const ArraySum = (arr) => {
  let tempArr = arr.sort((a, b) => a - b).pop();

  let tot = arr.reduce((preVal, curr) => (curr = preVal + curr));
  return tot === tempArr;
};

console.log(ArraySum([1, 2, 6, 4, 9, 13]));

//capitalize each word
const capitalizeWord = (arr) => {
  return arr
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.toLowerCase().slice(1))
    .join(" ");
};

console.log(capitalizeWord("william antwi-boasiako"));
