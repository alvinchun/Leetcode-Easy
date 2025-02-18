var reverseBits = function(n) {
    var result = 0;
    var count = 32;
  
    while (count--) {
      result *= 2;
      result += n & 1;
      n = n >> 1;
    }
    return result;
  };

  var reverseBits = n => [...Array(32)].reduce((res) => (res << 1) | (n & 1), 0) & 0xFFFFFFFF;

  var reverseBits = function(n) {
    let result = 0;
    let count = 32;

    while (count--) {
        result <<= 1;    // Shift result left by 1
        result |= n & 1; // Add the least significant bit of n to result
        n >>= 1;         // Shift n right by 1
    }

    return result >>> 0; // Return unsigned result
};
