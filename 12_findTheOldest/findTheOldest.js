const findTheOldest = function(people) {
    console.table(people.sort((a,b)=> (a.yearOfDeath-a.yearOfBirth)<(b.yearOfDeath-b.yearOfBirth)?1:-1))
    const currentYear = new Date().getFullYear()
    console.log(currentYear)
    
    return people.sort((a,b)=> ((a.yearOfDeath || currentYear)-a.yearOfBirth)<((b.yearOfDeath || currentYear)-b.yearOfBirth)?1:-1)[0]
    
  
    /*  WHAT IS YOUR PROBLEM?!

    const x = people.sort((a,b)=>{
                let aValue = a.yearOfDeath-a.yearOfBirth
                let bValue = b.yearOfDeath-b.yearOfBirth
                if(!(a.yearOfDeath || b.yearOfDeath)){aValue = currentYear - a.yearOfBirth}
                if(!(b.yearOfDeath || a.yearOfDeath)){bValue = currentYear - b.yearOfBirth}
                if(aValue<bValue){
                    return 1
                }else{
                    return -1
                }
                
            })
    return x[0] */
};

// Do not edit below this line
module.exports = findTheOldest;
