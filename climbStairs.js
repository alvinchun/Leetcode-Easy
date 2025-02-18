var climbStairs = function(n) {
    if (n <= 3) return n;

    let prev1 = 3;
    let prev2 = 2;
    let cur = 0;

    for (let i = 3; i < n; i++) {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;    
};

var climbStairs = n => n <= 3 ? n : (prev1 = 3, prev2 = 2, Array.from({ length: n - 3 }, () => [prev1, prev2] = [prev1 + prev2, prev1])[n - 3]);

var climbStairs = function(n) {
    if (n <= 3) return n;

    let prev1 = 3, prev2 = 2, cur;

    for (let i = 3; i < n; i++) {
        cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return cur;
};
