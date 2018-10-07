/**
 * 罗马数字转整数（简单类型下第4题，全部类别下第13题）
 * 描述：
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 * 字符          数值
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 示例：
 * 输入: "III"
 * 输出: 3
 * 输入: "IV"
 * 输出: 4
 * 输入: "LVIII"
 * 输出: 58
 * 解释: L = 50, V= 5, III = 3.
 * 输入: "MCMXCIV"
 * 输出: 1994
 * 解释: M = 1000, CM = 900, XC = 90, IV = 4.
 */

/**
 * 思路：
 * 1.设定特殊的罗马字符集以及对应的整数集（索引要对上）
 * 2.设定正常的罗马数字集以及对应的整数集（索引要对上）
 * 3.把传进来的罗马数字转为数组romanStrList，并遍历
 * 4.把romanStrList的i项跟i+项的值加起来，并在特殊的罗马字符集查找，看下是否包含该组合，
 * 如果包含该组合，说明这两个是特殊字符，那么获取该特殊字符对应的数字，并赋值给intNum，在手动把i增加1
 * 因为i+1之后此次循环过后i还会再+1，实际上i已经+2了，刚好特殊字符为2位数，相当于又重头开始
 * 5.如果在特殊字符集找不到对应的索引，说明i跟i+1项为正常字符，我们只需要正常赋值就行
 * 6.最后返回结果
 * 代码执行时间为164ms，超过95.67%的js提交
 */

var romanToInt = function(romanNum) {
  var special = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
  var specialNum = [4, 9, 40, 90, 400, 900];
  var romanList = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  var romanInt = [1, 5, 10, 50, 100, 500, 1000];
  var intNum = '';
  var romanStrList = romanNum.split('')
  for (var i = 0; i < romanStrList.length; i++) {
    var item = romanStrList[i] + romanStrList[i+1]
    var index = special.indexOf(item)
    var existence = romanList.indexOf(romanStrList[i])
    intNum = +intNum
    if (index !== -1) {
      intNum += specialNum[index]
      i+=1
    } else {
      intNum += romanInt[existence]
    }
  }
    return intNum
};