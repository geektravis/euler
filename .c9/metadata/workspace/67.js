{"changed":true,"filter":false,"title":"67.js","tooltip":"/67.js","value":"var _ = require('lodash');\n\n\nvar fs = require('fs');\nfs.readFile('67.txt', function(err, fileContents) {\n    var data = fileContents.toString().split(\"\\n\");\n    findPath(data);\n});\n\nfunction findPath(data) {\n    var maxPath = _.chain(data)\n        .map(function(string) {\n            return string.split(' ');\n        })\n        .reverse()\n        .reduce(function(prev, curr) {\n            return _.map(curr, function (value, i) {\n                console.log(parseInt(value) + Math.max(parseInt(prev[i]), parseInt(prev[i+1])));\n                return parseInt(value) + Math.max(parseInt(prev[i]), parseInt(prev[i+1]));\n            })\n        })\n        .value();\n    console.log(maxPath);\n}","undoManager":{"mark":-1,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":23,"column":1},"action":"insert","lines":["var _ = require('lodash');","","","var fs = require('fs');","fs.readFile('67.txt', function(err, fileContents) {","    var data = fileContents.toString().split(\"\\n\");","    findPath(data);","});","","function findPath(data) {","    var maxPath = _.chain(data)","        .map(function(string) {","            return string.split(' ');","        })","        .reverse()","        .reduce(function(prev, curr) {","            return _.map(curr, function (value, i) {","                console.log(parseInt(value) + Math.max(parseInt(prev[i]), parseInt(prev[i+1])));","                return parseInt(value) + Math.max(parseInt(prev[i]), parseInt(prev[i+1]));","            })","        })","        .value();","    console.log(maxPath);","}"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":9,"column":25},"end":{"row":9,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1420850542258}