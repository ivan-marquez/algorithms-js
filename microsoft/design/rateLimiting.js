/**
 * There is an API that can process 1000 requests per minute. Your task is to design an application that can
 * manage the bandwidth for that API.
 *
 * Your application needs to act as a gate, so it allows enough requests to maximize the potential of
 * the API without overloading it.
 *
 * Design your application in the most optimal way.
 */

/**
 * Approach: Leaky Bucket (Rate Limiting algorithm)
 * Discard additional requests once the queue is full (1000)
 * Pseudocode:
 * if queue length is greater/eq to capacity
 *   return false
 * queue.push(new Request(request, new Date))
 * timestamp = new Date
 *
 * while (queue.length <= capacity && queue[0].timestamp
 * has less than 1 min. of difference with timestamp):
 *   queue.shift();
 *   process request
 */

class Request {
  constructor(url, timestamp) {
    this.url = url;
    this.timestamp = timestamp;
  }
}

class Solution {
  constructor(capacity = 1000) {
    this.capacity = capacity;
    this.queue = [];
  }

  /**
   *
   * @param {string} request
   * @return {boolean}
   */
  processRequest(request) {
    if (this.queue.length >= this.capacity) {
      return false;
    }

    this.queue.push(new Request(request, new Date()));
    var timestamp = new Date();

    while (
      this.queue.length <= this.capacity &&
      this.queue[0].timestamp.getTime() + 1 * 60000 < timestamp
    ) {
      // process request
      this.queue.shift();
    }
  }
}
