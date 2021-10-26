const palindromes = function (str) {
    cleanedStr = str.toLowerCase().replace(/[\W_]/g, "")
    reversedStr = cleanedStr.split("").reverse().join("")

    if(cleanedStr === reversedStr){
        return true
    }
    return false
};

// Do not edit below this line
module.exports = palindromes;
