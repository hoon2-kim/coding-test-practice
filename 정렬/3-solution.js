// 정답 풀이
function solution(weights, limit) {
  weights.sort((a, b) => a - b);

  let left = 0;
  let right = weights.length - 1;
  let truck = 0;

  while (left <= right) {
    if (weights[left] + weights[right] <= limit) {
      left++;
    }
    right--;
    truck++;
  }

  return truck;
}
