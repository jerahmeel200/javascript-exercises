const repeatString = function (word, num) {
  if (num < 0) return "error";
  let string = "";
  for (let i = 0; i < num; i++) {
    string += word;
  }
  return string;
};
// const repeatString = function (str, num) {
//     if (num < 0) return "error";
//     return str.repeat(num);
//   };

// Do not edit below this line
module.exports = repeatString;
