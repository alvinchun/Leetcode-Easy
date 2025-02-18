var reverseString = function(s) {
    
    let size = s.length;
    
    // reverse string by mirror image
    for(let i = 0 ; i < Math.floor(size/2) ; i++ ){
        [ s[i], s[size-1-i] ] = [ s[size-1-i], s[i] ] ;
    }
    
    return;
};

var reverseString = function(s) {
    
    // one points to head position, the other points to tail position
    let [left, right] = [0, s.length-1];
    
    // reverse string by two pointers
    while( left < right ){
        [ s[left], s[right] ] = [ s[right], s[left] ];
        
        left += 1;
        right -= 1;
    }
     
    return;
};

var reverseString = s => s.reverse();
