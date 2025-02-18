var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) {
        return -1;
    }
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    
    return -1;    
};

var strStr = (haystack, needle) => haystack.indexOf(needle);

var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) return -1; // If needle is longer, return -1

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // Found the needle, return the index
        }
    }

    return -1; // If no match found, return -1
};
