var bn = require('bignum');
// what is the first fibonacci number with 1000 digits?

function fib(a, b, i) {
    var term = bn.add(a,b);
    console.log(i + ' = ' + term);
    console.log('-----------------');
    var ten = bn.add(10,0);
    if (term.ge( ten.pow(999))) {
        console.log('done');
    }
    else {
        fib(b, term, i+1);
    }
}

fib (1, 1, 3);