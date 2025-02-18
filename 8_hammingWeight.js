var hammingWeight = function(int) {
    const str = int.toString(2); // pass a radix parameter of 2 to keep it in base 2.
    let count = 0;
    for (let char of str) {
        if (char === "1") count++;
    }
    return count;    
};

var hammingWeight = function(int) {
    return int.toString(2)
              .split("")
              .filter(char => char === "1")
              .length;    
};

var hammingWeight = function(int) {
    return int.toString(2).replaceAll("0", "").length;    
};

var hammingWeight = int => int.toString(2).split("1").length - 1;

var hammingWeight = function(int) {
    let count = 0;
    let binary = int.toString(2); // Convert to binary string
    
    for (let char of binary) {
        if (char === "1") count++; // Count occurrences of '1'
    }
    
    return count;
};
