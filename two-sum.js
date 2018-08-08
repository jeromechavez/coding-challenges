/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

var twoSum = function (nums, target) {

  var myObject = {};

  for (var i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (myObject.hasOwnProperty(complement)) {
      return [myObject[complement], i]
    }
    myObject[nums[i]] = i
  }
}

console.log(twoSum([2,7,11, 15], 9))