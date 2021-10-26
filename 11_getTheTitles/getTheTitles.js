const getTheTitles = function(x) {
    let titles = []
    x.forEach((e)=>titles.push(e.title))
    return x.map((e)=>e.title)
};

// Do not edit below this line
module.exports = getTheTitles;
