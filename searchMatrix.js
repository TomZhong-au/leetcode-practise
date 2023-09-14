/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

    let left = 0, right = matrix.length - 1, mid
    const unitLength = matrix[0].length

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        // if (mid[0]<=target && mid[unitLength-1]>=target) break //this is the mid we are looking for
        if (matrix[mid][0] > target) {
            right = mid - 1
        } else if (matrix[mid][unitLength - 1] < target) {
            left = mid + 1
        } else {
            break //this is the mid we are looking for
        }
    }
    const targetArr = matrix[mid]
    let start = 0, end = unitLength-1, center
    while (start <= end) {
        center = Math.floor((start + end) / 2)
        if (targetArr[center] < target) {
            start = center + 1
        } else if (targetArr[center] > target) {
            end = center - 1
        } else {
            return true
        }
    }
    return false
};