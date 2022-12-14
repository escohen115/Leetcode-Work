/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0]
    let max_profit = 0
    for (let i = 1; i < prices.length; i++) {
 
        // Checking for lower buy value
        if (buy > prices[i])
            buy = prices[i];
 
        // Checking for higher profit
        else if (prices[i] - buy > max_profit)
            max_profit = prices[i] - buy;
    }
    return max_profit;
};