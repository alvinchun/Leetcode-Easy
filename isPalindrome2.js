var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;    
};

var isPalindrome = s => (s = s.toLowerCase().replace(/[^a-z0-9]/g, '')) === [...s].reverse().join('');

var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false; // Mismatch found, not a palindrome
        left++;
        right--;
    }

    return true; // If loop completes, it's a palindrome
};
