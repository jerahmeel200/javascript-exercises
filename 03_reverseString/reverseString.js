const reverseString = function (str) {
  let splitedString = str.split("");
  let reverseArray = splitedString.reverse();
  let reversedString = reverseArray.join("");

  return reversedString;
};
// or
// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;
