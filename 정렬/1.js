// 나의 풀이
function solution(score) {
  const sortScore = [...score].sort((a, b) => b - a);
  const result = [];

  for (const s of score) {
    if (sortScore.indexOf(s) <= 2) {
      result.push(`Top ${sortScore.indexOf(s) + 1}`);
    } else {
      result.push(`Rank ${sortScore.indexOf(s) + 1}`);
    }
  }

  return result;
}

console.log(solution([95, 85, 90, 70]));
console.log(solution([50, 100, 75]));
