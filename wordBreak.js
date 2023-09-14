/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    for (let i = 0; i < wordDict.length; i++) {
        const word = wordDict[i]
        let target = s
        const pattern = new RegExp(word, 'g')

        if (pattern.test(target)) {
            target = target.replace(pattern, '*')

            for (let j = i; j < wordDict.length; j++) {
                const pattern = new RegExp(wordDict[j], 'g')
                target = target.replace(pattern, '*')
            }
        }
        if (target.split('').every(elm => elm === '*')) return true
    }

    return false
};