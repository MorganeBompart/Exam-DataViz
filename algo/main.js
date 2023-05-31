function twoSum(nums, target) {
    const numMap = new Map();
  
    for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
      const currentNum = nums[currentIndex];
      const targetDifference = target - currentNum;
  
      if (numMap.has(targetDifference)) {
        const targetDifferenceIndex = numMap.get(targetDifference);
        return [targetDifferenceIndex, currentIndex];
      }
  
      numMap.set(currentNum, currentIndex);
    }
  
    return [];
  }
  
  // TEST
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  const indices = twoSum(nums, target);
  console.log(indices);
  