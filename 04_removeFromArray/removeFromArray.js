const removeFromArray = function(arr, ...num) {
    
    num.forEach(numelement => {
        arr.forEach(function(element, index, object) {
            if (element === numelement){
                object.splice(index, 1)
            }

        });
    });

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
