const reverseString = function(str) {
    let arr = [];
    for(let i=str.length-1; i >= 0; i--){
        arr.push(str.charAt(i))
    };
    strReverse = arr.join("")
    
    return strReverse
};

// Do not edit below this line
module.exports = reverseString;
