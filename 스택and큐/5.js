// 나의 풀이
function solution(queue1, queue2, k) {
  const arr = [...queue1, ...queue2];
  const queue = [];

  while (arr.length > 0 && queue.length < k) {
    const current = arr[0];

    if (current % 2 === 0) {
      queue.push(arr.shift());
    } else {
      const dequeue = arr.shift();
      arr.push(dequeue);
    }
  }

  return queue;
}

console.log(solution([1, 3, 4], [6, 5, 8], 3));
