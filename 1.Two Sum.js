
/**
 * 两数之和
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 以下代码执行时间为146ms
 * 战胜71.41%的js提交记录，还有很大的提升空间
 * 
 */
let nums = [2, 7, 11, 15];
let targte = 9;
var twoSum = (nums, target) => {
  let number = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        number.push(i);
        number.push(j);
        return number
      }
    }
  }
}