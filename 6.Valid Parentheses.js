/**
 * 有效的括号（简单类别下第6题，全部类别下第20题）
 * 描述:
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 1.左括号必须用相同类型的右括号闭合。
 * 2.左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例：
 * 输入: "()"
 * 输出: true
 * 输入: "()[]{}"
 * 输出: true
 * 输入: "(]"
 * 输出: false
 * 输入: "([)]"
 * 输出: false
 */

 /**
  * 思路：
  * 1.因为空字符串可以被认为是有效的字符串，所以第一步先确定传进来的值是否为空字符串
  * 2.把各个类型的有效的左括号跟右括号分成两个数组一一对应起来存起来
  * 3.把传进来的字符串转数组
  * 4.判定第一个元素是否为右括号，如果为右括号那么该字符串则为无效的
  * 5.模拟栈，遍历筛查字符串各项
  * 5.1 遍历，判断i项是否为左括号，为左括号就推到模拟栈数组中
  * 5.2 如果i项为右括号，则出栈对比，看看最后入栈的值是否跟该右括号为匹配的一对
  * 5.3 如果为匹配的一对，栈列表弹出最后一个
  * 5.4 如果不是跟栈尾的值为一对，说明该字符串不是有效的字符串，返回false
  * 6，循环结束，查看栈里面是否还有数据，如果有数据说明该字符串还有一个左括号没有被匹配到，是一个无效的字符串
  * 代码执行时间为92ms，超过35.14%的js提交，很烂的代码
  */


let isValid = function (str) {
  if (!str) return true
  let leftList = ['{', '[', '(']      // 左边括号
  let rightList = ['}', ']', ')']     // 右边括号
  let strArr = str.split('')
  let stack = []
  let flag = false
  if (rightList.indexOf(strArr[0]) !== -1) return false
  for (let i = 0; i < strArr.length; i++) {
    let index = leftList.indexOf(strArr[i])
    if (index !== -1) {
      stack.push(strArr[i])
    } else {
      if (stack.length !== 0) {
        let item = stack[stack.length - 1]
        let itemIndex = leftList.indexOf(item)
        let target = rightList.indexOf(strArr[i])
        if (itemIndex === target) {
          stack = stack.splice(0, stack.length - 1)
          flag = true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
  return stack.length === 0 ? true : false
}