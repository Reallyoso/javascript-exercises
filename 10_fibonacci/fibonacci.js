const fibonacci = function(x) {
    let arr = [1,1,]
    if(x < 0){
        return "OOPS"
    }else{
        for (let i = 2; i < x; i++) {
            arr[i] = arr[i-1] + arr[i-2]        
        }
        return arr[x-1]
    }
};  

// Do not edit below this line
module.exports = fibonacci;
