var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    var freq = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    
    for (var i = 0; i < freq.length; i++) {
        if (freq[i] !== 0) {
            return false;
        }
    }
    
    return true;
};

var isAnagram = (s, t) => [...s].sort().join('') === [...t].sort().join('');

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++; // Increment count for s
        freq[t.charCodeAt(i) - 97]--; // Decrement count for t
    }

    for (let count of freq) {
        if (count !== 0) return false; // If any count is non-zero, it's not an anagram
    }

    return true;
};
