'use strict'
var a = ['vasya', 'petya', 'artem', 'masha'];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' ,'z'];
var matrixResult = [];
var indexMatrixResult = 0;

for (var i=0; i < alphabet.length; i++) {
    for (var j=0; j < a.length; j++) {
        if (alphabet[i] === a[j][0]) {        
        matrixResult[indexMatrixResult] = a[j];
        indexMatrixResult++;
        };
    }; 
};

console.log(matrixResult);

