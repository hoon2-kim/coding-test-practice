// 나의 풀이
function solution(arr) {
  const result = [];
  while (arr.length > 0) {
    result.push(arr.pop());
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([3, 2, 1]));
