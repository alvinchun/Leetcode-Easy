var romanToInt = function(s) {
    let res = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            res -= roman[s[i]];
        } else {
            res += roman[s[i]];
        }
    }

    return res + roman[s[s.length - 1]];    
};

var romanToInt = s => [...s].reduce((res, c, i, arr) => res + (arr[i + 1] > c ? -roman[c] : roman[c]), 0) + roman[s[s.length - 1]];

var romanToInt = function(s) {
    let res = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            res -= roman[s[i]]; // Subtract if the current value is smaller than the next
        } else {
            res += roman[s[i]]; // Otherwise, add the value
        }
    }

    return res + roman[s[s.length - 1]]; // Add the value of the last character
};
