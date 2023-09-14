/**
 * 
 * @param {number[]} array 
 */

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i
        let temp
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        temp = array[i]
        array[i] = array[min]
        array[min] = temp

    }
}

const unorder = [1, 4, 0, 56, 89, 2, 901, 56, -2]
selectionSort(unorder)
console.log(unorder)