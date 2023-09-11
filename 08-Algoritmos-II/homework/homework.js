"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array; // Comprobamos si el array tiene 1 elemento o menos, en cuyo caso ya está ordenado

  // Elegimos un índice aleatorio para el pivote
  let pivote = array[Math.floor(Math.random() * array.length)]; // Guardamos el valor del pivote
  let left = []; // Creamos un array para los elementos menores que el pivote
  let right = []; // Creamos un array para los elementos mayores que el pivote
  let otro = []; // Creamos un array para los elementos iguales al pivote

  for (let i = 0; i < array.length; i++) {
    // Iteramos sobre el array original
    if (array[i] === pivote) {
      // Si el elemento es igual al pivote, lo agregamos a 'otro'
      otro.push(array[i]);
    } else if (array[i] < pivote) {
      // Si el elemento es menor que el pivote, lo agregamos a 'left'
      left.push(array[i]);
    } else if (array[i] > pivote) {
      // Si el elemento es mayor que el pivote, lo agregamos a 'right
      right.push(array[i]);
    }
  }
  // Llamamos recursivamente a quickSort en 'left' y 'right', luego concatenamos 'otro' en el medio
  return quickSort(left).concat(otro).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let divisor = Math.floor(array.length / 2);

  let left = array.slice(0, divisor);
  let right = array.slice(divisor);

  array = [];
  const leftArray = mergeSort(left);
  const rightArray = mergeSort(right);

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      array.push(leftArray.shift());
    } else {
      array.push(rightArray.shift());
    }
  }

  return array.concat(leftArray, rightArray);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
