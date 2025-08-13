// 나의 풀이
function solution(commands) {
  const queue = [];
  const result = [];

  for (const c of commands) {
    if (c.startsWith('DEQUEUE')) {
      if (queue.length === 0) {
        result.push('EMPTY');
      } else {
        const dequeue = queue.shift();
        result.push(dequeue);
      }
    } else {
      const n = Number(c.split(' ')[1]);
      queue.push(n);
    }
  }

  return result;
}

console.log(solution(['ENQUEUE 3', 'ENQUEUE 5', 'DEQUEUE', 'DEQUEUE', 'DEQUEUE']));
