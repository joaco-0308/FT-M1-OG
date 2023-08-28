"use strict";

function BinarioADecimal(num) {
  let contador = 0; 
  let array = num.split("").reverse(); 

  for (let i = 0; i < array.length; i++) { 
    contador += array[i] * 2 ** i; 
  }
  return contador; 
}

function DecimalABinario(num) {
let contador = []; 

while(num > 0){ 
   contador = num % 2 + contador; 
   num = Math.floor(num / 2); 
}
return contador; 
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
