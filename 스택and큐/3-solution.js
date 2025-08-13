// 정답 풀이
function solution(s) {
  const stack = [];

  for (const char of s) {
    const top = stack[stack.length - 1];
    // 아스키 코드값으로 비교 - 같은 문자열이라면 대문자와 소문자의 차이는 32
    if (top && Math.abs(top.charCodeAt() - char.charCodeAt()) === 32) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join('');
}
