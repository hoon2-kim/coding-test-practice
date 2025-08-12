// 나의 풀이
function solution(gate) {
  const result = [];

  for (let g of gate) {
    if (g === '<') {
      result.push(g);
    } else {
      // 맨 처음 >이라면 바로 실패
      if (result.length === 0) {
        return false;
      }

      result.pop();
    }
  }

  if (result.length !== 0) {
    return false;
  }

  return true;
}

console.log(solution('<<>>'));
console.log(solution('<><>'));
console.log(solution('>><<'));
console.log(solution('<<<>'));
