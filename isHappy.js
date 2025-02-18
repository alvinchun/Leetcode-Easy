var isHappy = function(n) {
    var visit = new Set();
    
    var getNextNumber = function(n) {
        var output = 0;
        
        while (n > 0) {
            var digit = n % 10;
            output += digit * digit;
            n = Math.floor(n / 10);
        }
        
        return output;
    };

    while (!visit.has(n)) {
        visit.add(n);
        n = getNextNumber(n);
        if (n === 1) {
            return true;
        }
    }

    return false;    
};

var isHappy = (n, visit = new Set()) => n === 1 || !visit.has(n) && (visit.add(n), isHappy([...n + ''].reduce((s, d) => s + d * d, 0), visit));

var isHappy = function(n) {
    let seen = new Set();

    var getNext = function(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    while (!seen.has(n)) {
        if (n === 1) return true; // If 1 is reached, it's a happy number
        seen.add(n);
        n = getNext(n);
    }

    return false; // Loop detected, not a happy number
};
