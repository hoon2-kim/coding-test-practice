// 정답 풀이
function solution(boxes) {
  const stack = [];

  for (const box of boxes) {
    if (stack[stack.length - 1] !== box) {
      stack.push(box);
    }
  }

  return stack;
}
