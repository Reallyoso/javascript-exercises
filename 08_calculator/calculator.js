const add = function(a, b) {
	const sum = a+b
  return sum
};

const subtract = function(a, b) {
	const sum = a-b
  return sum
};

const sum = function(arr) {
	const sum = arr.reduce((total, e)=>total = (total)+e, 0)
  return sum
};

const multiply = function(arr) {
  const sum = arr.reduce((prev, next)=> prev*next)
  return sum
};

const power = function(a, e) {
	return a**e
};

const factorial = function(a) {
	let sum = 1
  if(a < 0){
    return -1
  }else if(a===0){
    return 1
  }else{
     for(let i = a;i>=1 ;i--){
       sum = sum * i
    }
  }
  return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
