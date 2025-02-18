const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

  const maxProfit = prices => prices.reduce(([min, max], p) => [Math.min(min, p), Math.max(max, p - min)], [prices[0], 0])[1];

  const maxProfit = function(prices) {
    let minPrice = prices[0], maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) minPrice = price; // Update minimum price
        else maxProfit = Math.max(maxProfit, price - minPrice); // Calculate max profit
    }

    return maxProfit;
};
