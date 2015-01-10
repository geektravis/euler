var _ = require('lodash');

var getTextForNumber = function(x) {
    switch(x) {
        case '0': return '';
        case '1': return 'one';
        case '2': return 'two';
        case '3': return 'three';
        case '4': return 'four';
        case '5': return 'five';
        case '6': return 'six';
        case '7': return 'seven';
        case '8': return 'eight';
        case '9': return 'nine';
        case '10': return 'ten';
        case '11': return 'eleven';
        case '12': return 'twelve';
        case '13': return 'thirteen';
        case '14': return 'fourteen';
        case '15': return 'fifteen';
        case '16': return 'sixteen';
        case '17': return 'seventeen';
        case '18': return 'eighteen';
        case '19': return 'nineteen';
        case '1000': return 'onethousand';
    }
    if (x[2]===undefined) {
        switch(x[0]) {
            case '0': return getTextForNumber(x[1]);
            case '2': return 'twenty' + getTextForNumber(x[1]);
            case '3': return 'thirty' + getTextForNumber(x[1]);
            case '4': return 'forty' + getTextForNumber(x[1]);
            case '5': return 'fifty' + getTextForNumber(x[1]);
            case '6': return 'sixty' + getTextForNumber(x[1]);
            case '7': return 'seventy' + getTextForNumber(x[1]);
            case '8': return 'eighty' + getTextForNumber(x[1]);
            case '9': return 'ninety' + getTextForNumber(x[1]);
        }
        
    }
    if (x[1] == 0 && x[2] == 0) return getTextForNumber(x[0])+'hundred'+getTextForNumber(x[1]+''+x[2]);
    return getTextForNumber(x[0])+'hundredand'+getTextForNumber(x[1]+''+x[2]);
    console.log(x + ' = ' + x[0] + ';' + x[1] + ';' + x[2]);   
}


console.log(_.chain(new Array(1000))
    .map(function (value, i) { return ''+(i+1); })
    .map(getTextForNumber)
    .map(function(s) { console.log(s + ' ' + s.length); return s.length })
    .reduce(function(sum, curr) { return sum + curr }, 0)
    .value()
);
