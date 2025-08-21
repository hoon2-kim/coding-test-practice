// 정답 풀이
function solution(m, v) {
  m.sort((a, b) => a - b);
  v.sort((a, b) => a - b);

  let satisfiedCount = 0; // 만족한 직원수
  let i = 0; // 직원
  let j = 0; // 선물

  while (i < m.length && j < v.length) {
    // 현재 선물가치가 직원 요구이상이면 만족
    if (v[j] >= m[i]) {
      satisfiedCount++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return satisfiedCount;
}
