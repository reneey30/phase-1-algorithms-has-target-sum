function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (const number of array){
    const complement = target - number;

    if(seenNumbers.has(complement)) return true

    seenNumbers.add(number)
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Time complexity : O(n)
  Space complexity: O(n)
*/

/* 
  Add your pseudocode here
  
*/

/*
  Add written explanation of your solution here
  Write function hassumtarget that takes in an array and a target number.
  check if the array contains two numbers that adds up to the target array
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("")

  console.log('Expecting: true')
  console.log("=>", hasTargetSum([3, 5, 6, 8], 9))
}

module.exports = hasTargetSum;
