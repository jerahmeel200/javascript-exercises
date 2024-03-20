const reverseString = function (str) {
  let splitedString = str.split("");
  let reverseArray = splitedString.reverse();
  let reversedString = reverseArray.join("");

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
