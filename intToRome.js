/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var patterns = [
    [],
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 1],
    [1],
    [1, 0],
    [1, 0, 0],
    [1, 0, 0, 0],
    [0, 2],
  ];

  var bluePrint = {
    2: ["C", "D", "M"],
    1: ["X", "L", "C"],
    0: ["I", "V", "X"],
  };

  let result = "";

  for (let power = 3; power >= 0; power--) {
    var digit = Math.floor(num / 10 ** power);
    if (power === 3) {
      result = Array(digit).fill("M").join("");
    } else {
      result += patterns[digit].reduce((prev, elm) => {
        return prev + bluePrint[power][elm];
      }, "");
    }

    num = num - digit * 10 ** power;
  }

  return result;
};

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
