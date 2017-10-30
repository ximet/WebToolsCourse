const math = require('mathjs');

const epsilon = math.round(math.e, 3);   
const expression = math.atan2(3, -3) / epsilon; 

document.getElementById('expression').innerHTML = expression;