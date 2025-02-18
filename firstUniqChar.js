
var firstUniqChar = function(s) {
    let mp = {};

    for (let a of s) {
        mp[a] = (mp[a] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (mp[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};

var firstUniqChar = s => [...s].findIndex(c => s.indexOf(c) === s.lastIndexOf(c));

var firstUniqChar = function(s) {
    let freqMap = {};

    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1; // Count occurrences
    }

    for (let i = 0; i < s.length; i++) {
        if (freqMap[s[i]] === 1) return i; // Return first unique character index
    }

    return -1; // No unique character found
};
