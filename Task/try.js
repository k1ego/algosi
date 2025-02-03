nums = [1,2,4,6]
let i = 0;
// добавить nums[i] во все массивы кроме нулевого:

let array = new Array(5).fill([1]);
array[1].push(5)
const res = new Array(nums.length).fill(0);
console.log(res)

console.log(array)