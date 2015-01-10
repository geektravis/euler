var _ = require('lodash');

// for all numbers up to 10000
// get the sum of all proper divisors
// map to 0 if not amicable
// sum


function getProperDivisors(num) {
 var  n_factors = [],  i;
 
 for (i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
  if (num % i === 0)
  {
   n_factors.push(i);
   if (num / i !== i  && i > 1)
    n_factors.push(num / i);
  }
 n_factors.sort(function(a, b){return a - b;});  // numeric sort
 return n_factors;
}    

function getSumOfProperDivisors(i) {
   return _.reduce(getProperDivisors(i), function(sum, num) { return sum+num;});
}

function isAmicable(i) {
   var sum = getSumOfProperDivisors(i);
   if (i == getSumOfProperDivisors(sum) && i!=sum) return true;
}
    
var a = _.chain(new Array(10000))
    .map(function (value, i) { return (i+1); }) // get the index number as the value
    .map(function (e) { if (isAmicable(e)) return e;  return 0;})// map to 0 if it is not amicable
    .reduce(function(a, b) { return 0+a+b; }, 0)
.value();

console.log(a);
