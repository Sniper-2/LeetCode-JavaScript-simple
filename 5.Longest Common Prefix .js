/**
 * 最长公共前缀（简单类别下第5题，全部类别下第14题）
 * 描述：
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 所有输入只包含小写字母 a-z 
 * 
 * 示例：
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 */

 /**
  * 思路：
  * 1.判断传进来字符串数组是否为空，为空返回''；
  * 2.取出字符串数组的随便某一项，并遍历
  * 3.二层遍历，把字符串数组的每一项的i跟取出的项的i对比
  * 4.如果有任意一项不同，说明最长公共前缀结束，返回结果
  * 5.如果有一项相同，则把该项取出，拼接结果
  * 优化：实际上可以用截取方式取出字符串数组第一项，原本的字符串数组将会少一个元素，那么在遍历的时候会少遍历好几次
  * 代码执行时间为80ms，超过71.17%的js提交
  */

 var longestCommonPrefix = function(strs) {
  var result ='';
  if(!strs.length) return result;
  var firstStrs = strs[0];
  for (var i = 0; i < firstStrs.length; i++) {
    for (var j =  1; j < strs.length; j++) {
      if(firstStrs[i] != strs[j][i]){
        return result;
      }
     }
    result += firstStrs[i];
   }
  return result;
};