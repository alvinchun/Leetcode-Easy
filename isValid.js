var isValid = function(s) {
    const stack = [];
    const mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const c of s) {
        if (Object.values(mapping).includes(c)) {
            stack.push(c);
        } else if (mapping.hasOwnProperty(c)) {
            if (!stack.length || mapping[c] !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;    
};

var isValid = s => {
    let stack = [];
    for (let c of s) {
        if ("({[".includes(c)) stack.push(c);
        else if (!stack.length || "({["["})]".indexOf(c)] !== stack.pop()) return false;
    }
    return !stack.length;
};

var isValid = function(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (const c of s) {
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c); // Push opening brackets onto the stack
        } else {
            if (!stack.length || stack.pop() !== mapping[c]) return false; // Check for valid closing match
        }
    }

    return stack.length === 0; // Stack should be empty if all pairs match
};
