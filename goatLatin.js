/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    var current = words[i];
    var newWord = "";
    if (/^[aeiou]\w+/i.test(current)) {
      newWord = current + "ma";
    } else {
      newWord = current.substring(1) + current[0] + "ma";
    }

    for (let j = 0; j < i + 1; j++) {
      newWord += "a";
    }
    words[i] = newWord;
  }
  return words.join(" ");
};
