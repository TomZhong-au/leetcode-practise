/**
 * @param {number[]} list,
 * @param {number} target,
 * @return {string}
 */

function binarySearch(list, target) {
  let left = 0;
  let right = list.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (list[mid] === target) return mid;
    if (list[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 8, 9, 14, 16];
const target = 1;

console.log(binarySearch(arr, target));
