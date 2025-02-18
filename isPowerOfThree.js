var isPowerOfThree = function(n) {
    let a = Math.log(n) / Math.log(3)
    return Math.abs(a - Math.round(a)) < 1e-10
};

var isPowerOfThree = n => Number.isInteger(Math.log10(n) / Math.log10(3));

var isPowerOfThree = function(n) {
    if (n < 1) return false;

    while (n % 3 === 0) {
        n /= 3; // Keep dividing by 3 as long as possible
    }

    return n === 1; // If n reduces to 1, it's a power of 3
};
