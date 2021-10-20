const sumAll = function(startn, endn) {
    let allSum = 0;
    let startnum = Math.min(startn, endn)
    let endnum = Math.max(startn, endn)

/*     if(startn < 0 || endn < 0){
        return "ERROR"
    } */

    if(typeof(startn) != "number" || typeof(endn) != "number" || startn < 0 || endn < 0){
        return "ERROR"
    }

    for(let i = startnum;i <= endnum; i++){
        allSum += i
    }
    return allSum
};

// Do not edit below this line
module.exports = sumAll;
