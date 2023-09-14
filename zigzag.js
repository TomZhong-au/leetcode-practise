/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {
//     if (numRows === 1) return s

//     let column = 0
//     let row = 0
//     let arr = [[]]

//     for (let letter of s) {
//         arr[column][row] = letter

//         if (column % (numRows - 1) === 0 && row < numRows - 1) {
//             row++
//         } else {
//             column++
//             row--
//             arr[column] = []
//         }

//     }

//     console.log(arr)
//     let result = ''
//     for (let i = 0; i < numRows; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             result += arr[j][i] || ''
//         }
//     }
//     return result
// };

var convert = function (s, numRows) {
    if (numRows === 1) return s

    let arr = Array(numRows).fill('')
    let row = 0
    let goDown = true

    for (const letter of s) {
        arr[row] += letter

        if (row === 0) {
            goDown = true
        }

        if (row === numRows - 1) {
            goDown = false
        }

        row = row + (goDown ? 1 : -1)
    }
    return arr.join('')
}

const s = "PAYPALISHIRING", numRows = 4

console.log(convert(s, numRows))