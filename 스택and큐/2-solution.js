// 정답 풀이
function solution(gate) {
  const stack = [];

  for (const char of gate) {
    if (char === '<') {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
}
