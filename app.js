function largestPairSum (numbers) {
  //TODO: Write your Code here
  return numbers.sort((a,b)=>b-a)[0] +numbers.sort((a,b)=>b-a)[1];
}

console.log(largestPairSum([10,14,2,23,19])); // 42
console.log(largestPairSum([-100,-29,-24,-19,19])); // 0
console.log(largestPairSum([1,2,3,4,6,-1,2])); // 10
console.log(largestPairSum([-10, -8, -16, -18, -19])); // -18