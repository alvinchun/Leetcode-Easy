var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLen = pref.length;

    for (let i = 1; i < strs.length; i++) {
        let s = strs[i];
        while (pref !== s.substring(0, prefLen)) {
            prefLen--;
            if (prefLen === 0) {
                return "";
            }
            pref = pref.substring(0, prefLen);
        }
    }

    return pref;    
};

var longestCommonPrefix = strs => strs.reduce((p, s) => p.slice(0, [...p].findIndex((c, i) => c !== s[i]) + 1 || p.length));

var longestCommonPrefix = function(strs) {
    if (!strs.length) return ""; // Edge case: empty array

    let prefix = strs[0]; // Start with the first string as prefix

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) { // Trim prefix if it doesn't match
            prefix = prefix.slice(0, -1);
            if (!prefix) return ""; // No common prefix found
        }
    }

    return prefix;
};
