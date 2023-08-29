"use strict";

function BinarioADecimal(num) {
  let suma = 0; 
  let array = num.split("").reverse(); 

  for (let i = 0; i < array.length; i++) { 
    suma += array[i] * 2 ** i; 
  }
  return suma; 
}

function DecimalABinario(num) {
let binario = []; 

while(num > 0){ 
  binario = num % 2 + binario; 
   num = Math.floor(num / 2); 
}
return binario; 
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
