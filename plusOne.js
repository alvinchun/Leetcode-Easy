var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] + 1 !== 10) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }    
};

var plusOne = digits => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) return [...digits.slice(0, i), digits[i] + 1, ...digits.slice(i + 1)];
        digits[i] = 0;
    }
    return [1, ...digits];
};


var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1; // Add 1 to the current digit
            return digits;
        }
        digits[i] = 0; // Reset current digit to 0
        if (i === 0) {
            digits.unshift(1); // Add 1 at the beginning of the array
            return digits;
        }
    }
};
