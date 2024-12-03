// Two Sum

const nums = [2, 7, 11, 15]

const target = 9

const sum = twoSum(nums, target)

console.log("sum", sum)

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    // complement is the number is the number to add to the current number to reach the target
    const complement = target - nums[i]
    // this will return the result if the map contains the difference from the target and the nums[i]
    // if the key stored in the map match the complement {2=>0} and the complement is 2
    // 1st iteration it stores {2=>0}
    // 2nd iteration it checks target - nums[i] = 9 - 7 = 2
    // the condition match 2 is in the map
    if (map.has(complement)) {
      return [map.get(complement)!, i]
    }
    // if no complement store the nums[i] and the index
    map.set(nums[i], i)
  }

  return []
}
