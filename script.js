'use strict'


var a = [1, 3, 4, 73, 5654, 35345];
var b = [11,12,13,40,15,14];
var c = [11,11,11,11,11,11];

a.call = function () {    
    for (var i = 0; i < this.length; i++) { 
    console.log(this[i]);
  }; 
};

b.__proto__= a;


a.call();
b.call();
