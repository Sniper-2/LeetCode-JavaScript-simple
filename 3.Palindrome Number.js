/**
 * 回文数(简单类别下第3题，全部类别下第9题)
 * 描述：
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 进阶：不能将整数转为字符串
 * 示例：
 * 输入: 121
 * 输出: true
 * 
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 * 
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 */

 /**
  * 代码实现不会将整数转为字符串，使用Number类型数据进行答题
  * 思路：
  * 1.首先需要确定传进来的数字是否符合条件（大于10，并且10很明显就不是回文数）
  * 2.1把传进来的整数依次%10，取得各个位数的数值，把他存进arr缓存区域，并把传进来的数字去掉小数点后面的数值
  * 2.2while循环判断num%10后的值是否等于num本身，如果是，说明当前num只剩下1位数
  * 3.如果处理后的数组的长度为奇数，说明该数字为奇位数，中间位置的数字无论是正着读或者反着读都是一样的，所以直接删掉该数，不需要判断
  * 4.把处理后的arr数组切成前后两截，遍历其中一截，如果是回文数，那么此时的after跟front里面的元素肯定是一样的
  * 5.遍历判断，如果after跟front其中有一项不相等，说明传进来的数不是回文数，直接返回false
  * 代码执行时间为392ms，超过53.24%的js提交
  * 有较大的优化空间，如果遇到大数值，执行时间肯定远远大于392ms
  */

var isPalindrome = function(num) {
  if(num < 0 || (num % 10 == 0 && num != 0)) {
    return false;
  }
  let arr = []
  while(num % 10 != num) {
    arr.push(num%10)
    num = parseInt(num / 10)
  }
  num % 10 === num ? arr.push(num%10) : ''
  arr.length % 2 !== 0 ? arr.splice(parseInt(arr.length / 2),1) : ''
  let after = arr.slice(arr.length / 2 ).reverse()   
  let front = arr.slice(0, arr.length / 2) 
  for (let i = 0; i < after.length; i++) {
    if (after[i] != front[i]) {
      return false
    }
  }
  return true
};