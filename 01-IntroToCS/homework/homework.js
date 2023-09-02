"use strict";

function BinarioADecimal(num) { 
  let suma = 0; //Declaramos una variable llamada "suma" y la inicializamos en 0;
  let array = num.split("").reverse(); //Convierte la cadena de caracteres "num" en un array y invierte el orden. 

  for (let i = 0; i < array.length; i++) { //Bucle para iterar en cada elemento del array.
    suma = suma + array[i] * 2 ** i; //En cada iteracion, multiplica el elemento actual del arreglo (Digito Binario) por 2
    //elevado a la i (Posicion). Luego suma este resultado al valor actual de suma.
  }
  return suma; //Devolvemos el valor decimal calculado.
}


function DecimalABinario(num) {
  let binario = []; //Se declara una variable vacia para almacenar los digitos binarios.

  while (num > 0) {  //Se inicializa un bucle en el cual se entra si "num" es mayor que 0.
    let residuo = parseInt(num % 2); //Calcula el residuo de la division "num" por 2 y lo convierte en entero.
    num = Math.floor(num / 2); //Reduce el valor de num a la parte entera de su division por dos.
    binario.unshift(residuo); //Agrega el residuo al principio de arreglo almacenador.
  }
  return binario.join(""); //Convierte la variable "binario" en una cadena concatenando sus elementos.  
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
