/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a
 * different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve
 * any profit, return 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 * Approach: Dynamic Programming
 *
 * Pseudocode:
 * var profit to store profit
 * var min to store first price
 *
 * loop through prices (i: starting at idx 1):
 *    if min > prices[i]
 *      update min with prices[i]
 *    else if prices[i] - min > profit
 *      update profit with prices[i] - min
 * return profit
 */
const maxProfit = function (prices) {
  var profit = 0;
  var min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
    } else if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }

  return profit;
};
