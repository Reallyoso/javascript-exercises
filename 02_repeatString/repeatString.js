const repeatString = function(string, n) {
    let stringCon = "";
    if(n < 0){
        return "ERROR";
    }
    for(let i = 0; i < n; i++){

        stringCon += string
    }


    return stringCon
};

// Do not edit below this line
module.exports = repeatString;
