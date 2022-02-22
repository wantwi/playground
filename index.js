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

// console.log(capitalizeWord("william antwi-boasiako"));

//str should not contain numbers or symbols only letters
const countLetter = (str) => {
  let letter = [];
  let count = 1;

  str
    .split("")
    .sort((a, b) => a - b)
    .forEach((el, i, arr) => {
      if (arr[i] === arr[i + 1]) {
        count++;
      } else {
        let value = `${count}${arr[i]}`;
        letter = [...letter, value];
        count = 1;
      }
    });

  //return letter.join("");
  return str.split("").sort((a, b) => b - a);
};

const countLetter1 = (str) => {
  let strArr = str.split("");
  let letters = [];

  [...new Set(strArr)].forEach((el, i, arr) => {
    let value = `${strArr.filter((x) => x === el).length}${el}`;

    letters = [...letters, value];
  });

  return letters.join("");
};

console.log(countLetter1("gggggsssyyaagggg"));
