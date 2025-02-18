var titleToNumber = function(s) {
    const charCodeBase = 'A'.charCodeAt(0) - 1;
    const n = s.length;
    let number = 0;

    /* 
     * Think of it as base 26. For example,
     * Column number of "AB" = 1 * 26^1 + 2 * 26^0 
     */
    for (let i = 0; i < n; i++)
        number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n-i-1);
    
    return number;
};

var titleToNumber = s => s.split('').reduce((n, c) => n * 26 + c.charCodeAt(0) - 64, 0);

var titleToNumber = function(s) {
    const charCodeBase = 'A'.charCodeAt(0) - 1;
    let number = 0;

    for (let i = 0; i < s.length; i++) {
        number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, s.length - i - 1);
    }

    return number;
};
