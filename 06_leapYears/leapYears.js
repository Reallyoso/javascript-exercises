const leapYears = function(yearInThousands) {
    if (yearInThousands % 100 == 0 && yearInThousands % 400 == 0){
        return true
    } else if(yearInThousands % 100 == 0){
        return false
    }

    if(yearInThousands % 4 == 0){
        return true
    } else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
