/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const pattern = /[aeiou]/i
    const vowels = []

    const wordArr = s.split('')

    for (const word of wordArr) {
        if (pattern.test(word)) {
            vowels.push(word)
        }
    }

    if (vowels.length > 1) {
        for (let i = 0; i < wordArr.length; i++) {
            if (pattern.test(wordArr[i])) {
                wordArr[i] = vowels.pop()
            }
        }
    }


    return wordArr.join('')
};


console.log(reverseVowels('apple'))


