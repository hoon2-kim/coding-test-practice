function solution(weights, limit) {
  if (weights.length === 1) {
    return 1;
  }

  weights.sort((a, b) => a - b);

  let answer = 0;
  let left = 0;
  let right = weights.length - 1;

  while (left <= right) {
    if (weights[left] + weights[right] <= limit) {
      left++;
      right--;
      answer++;
    } else {
      right--;
      answer++;
    }
  }

  return answer;
}

console.log(solution([40, 50], 90));
console.log(solution([70, 50, 50, 30], 100));
console.log(solution([40, 50, 60, 90], 100));
console.log(solution([90, 90, 90, 90], 100));
