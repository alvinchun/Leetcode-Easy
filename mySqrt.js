var mySqrt = function(x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;
  
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
  
      if (mid * mid > x) {
        right = mid - 1;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        return mid;
      }
    }
  
    return right;
  };

  var mySqrt = x => {
    let left = 1, right = Math.floor(x / 2) + 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid > x) right = mid - 1;
        else if (mid * mid < x) left = mid + 1;
        else return mid;
    }
    return right;
};

var mySqrt = function(x) {
    let left = 1, right = Math.floor(x / 2) + 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        
        if (mid * mid > x) {
            right = mid - 1; // Decrease the search range
        } else if (mid * mid < x) {
            left = mid + 1; // Increase the search range
        } else {
            return mid; // Found the square root
        }
    }

    return right; // Return the integer part of the square root
};
