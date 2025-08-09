// 나의 풀이
function solution(boxes) {
  const result = [];
  for (let b of boxes) {
    if (!result.includes(b)) {
      result.push(b);
    }
  }

  return result;
}

console.log(solution([2, 2, 5, 5, 1, 1]));
console.log(solution([7, 7, 8, 8, 0, 0]));
