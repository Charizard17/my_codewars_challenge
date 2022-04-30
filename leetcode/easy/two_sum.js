// INSTRUCTIONS
// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// SOLUTION
// do forEach loop for nums array

// and create inner loop and add them to check whether target reached

// find and return indexes

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSumBruteForce = function(nums, target) {
    for (let j = 0; j < nums.length; ++j) {
        for (let i = 0; i < nums.length; ++i) {
            if (i != j && (nums[j] + nums[i]) == target) {
                return [j, i];
            }
        }
    }
};

// O(n^2) time complexity

// ––––––––––––––––––––––

// make one for loop

// extract indexed item from target

// use indexOf method to find rest values index in the array

// return both indexes

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; ++i) {
        let restValue = target - nums[i];
        if (nums.includes(restValue) && nums.indexOf(restValue) != i) {
            let index = nums.indexOf(restValue);
            if (index == i) {
                index = nums.indexOf(restValue, i + 1);
            }
            return [i, index];   
        }
    }
}

// O(n) time complexity