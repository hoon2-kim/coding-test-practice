// 나의 풀이
function solution(tickets) {
  let answer = 0;
  const sortTickets = tickets.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let last = 0;
  for (let i = 0; i < sortTickets.length; i++) {
    if (sortTickets[i][0] >= last) {
      answer++;
      last = sortTickets[i][1];
    }
  }

  return answer;
}

console.log(
  solution([
    [8, 10],
    [3, 7],
    [1, 5],
    [2, 6],
  ])
);
console.log(
  solution([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
