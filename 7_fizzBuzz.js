/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var ans = [];

    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ans.push("FizzBuzz");
        } else if (i % 3 === 0) {
            ans.push("Fizz");
        } else if (i % 5 === 0) {
            ans.push("Buzz");
        } else {
            ans.push(i.toString());
        }
    }

    return ans;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var res = [];
    var i = 1, fizz = 0, buzz = 0;

    while (i <= n) {
        fizz++;
        buzz++;

        if (fizz === 3 && buzz === 5) {
            res.push("FizzBuzz");
            fizz = buzz = 0;
        } else if (fizz === 3) {
            res.push("Fizz");
            fizz = 0;
        } else if (buzz === 5) {
            res.push("Buzz");
            buzz = 0;
        } else {
            res.push(i.toString());
        }

        i++;
    }

    return res;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var ans = [];
    for (var i = 1; i <= n; i++) {
        ans.push(
            (i % 15 === 0) ? "FizzBuzz" :
            (i % 5 === 0) ? "Buzz" :
            (i % 3 === 0) ? "Fizz" :
            i.toString()
        );
    }
    return ans;
};

var fizzBuzz = n => Array.from({ length: n }, (_, i) => (++i % 15 === 0 ? "FizzBuzz" : i % 5 === 0 ? "Buzz" : i % 3 === 0 ? "Fizz" : i.toString()));

var fizzBuzz = function(n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else {
            result.push(i.toString());
        }
    }

    return result;
};
