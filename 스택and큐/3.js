// 나의 풀이
function solution(s) {
  const stack = [];

  if (stack.length === 1) {
    return s;
  }

  for (const char of s) {
    if (stack[stack.length - 1] !== char.toLowerCase() && stack[stack.length - 1] !== char.toUpperCase()) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.length > 0 ? stack.join('') : '';
}

console.log(solution('infFflearn'));
console.log(solution('aAbBcC'));
console.log(solution('xYyX'));
console.log(solution('a'));
console.log(solution('Code'));
