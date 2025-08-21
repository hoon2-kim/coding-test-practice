function solution(m, v) {
  m.sort((a, b) => a - b);
  v.sort((a, b) => a - b);

  let answer = 0;
  let p1 = 0;
  let p2 = 0;

  while (p1 < m.length && p2 < v.length) {
    if (v[p2] < m[p1]) {
      p2++;
    } else {
      p1++;
      answer++;
    }
  }

  return answer;
}

console.log(solution([2, 4, 6, 8, 10], [1, 3, 5, 7, 9, 11]));
console.log(solution([5, 10, 15], [5, 5]));
console.log(solution([2, 4], [1, 2, 3]));
