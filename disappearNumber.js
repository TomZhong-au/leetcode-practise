/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = [];
  const arr = [];

  for (const number of nums) {
    if (arr[number] !== true) {
      arr[number] = true;
    }
  }

  for (i = 1; i < nums.length + 1; i++) {
    if (!arr[i]) res.push(i);
  }

  return res;
};
// var findDisappearedNumbers = function (nums) {
//   const map = new Map();
//   const res = [];

//   for (const number of nums) {
//     if (!map.get(number)) {
//       map.set(number, true);
//     }
//   }

//   for (let i = 1; i < nums.length + 1; i++) {
//     if (!map.has(i)) res.push(i);
//   }
//   return res;
// };
