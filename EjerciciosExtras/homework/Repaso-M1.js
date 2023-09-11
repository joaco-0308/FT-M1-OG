const { Queue, Node, LinkedList, BinarySearchTree } = require("./DS.js");

// Implementar la función countArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [1, [2, [3,4]], [5,6], 7];
//    countArray(array); --> Debería devolver 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var countArray = function (array) {
  // Tu código aca:
  let suma = 0; // Inicializa una variable llamada 'suma' en 0. para acumular la suma de numeros

  for (let i = 0; i < array.length; i++) {
    // Inicia un bucle que recorre todos los elementos del array.
    if (Array.isArray(array[i])) {
      // Comprueba si el elemento actual es un array.
      suma += countArray(array[i]); // Si el elemento es un array, llama recursivamente a la función countArray con ese array como argumento, y suma el resultado a la 'suma'.
    } else {
      suma += array[i]; // Si el elemento no es un array, simplemente lo suma a la 'suma'.
    }
  }
  return suma; // Devuelve el resultado final de la suma.
};

// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
// var obj = {
//   a: {
//     a1: 10,
//     a2: 'Franco',
//     a3: {f: 'r', a: 'n', c: {o: true}}
//   },
//   b: 2,
//   c: [1, {a: 1}, 'Franco']
// }
// countProps(obj)--> Deberia devolver 10 ya que el objeto inicial tiene 3 propiedades, pero a su vez
// dentro de a tenemos 3 propiedades mas, luego a3 tiene otras 3 y por ultimo c tiene una extra.
// Propiedades: a, a1, a2, a3, f, a, c, o, b, c --> 10 en total

var countProps = function (obj) {
  // Tu código aca:
  let contarDatod = 0; // Inicializa una variable contarDatod con el valor 0.

  for (let prop in obj) {
    // Inicia un bucle for...in para iterar sobre las propiedades del objeto obj.
    contarDatod++; // Incrementa la variable contarDatod en 1 en cada iteración del bucle, contando una propiedad.
    if (typeof obj[prop] === "object") {
      // Verifica si la propiedad actual es de tipo objeto.
      if (!Array.isArray(obj[prop])) {
        // Verifica si el objeto actual no es un array.
        contarDatod += countProps(obj[prop]); // Llama recursivamente a la función countProps para contar las propiedades dentro de este objeto y suma ese resultado a contarDatod.
      }
    }
  }
  return contarDatod; // Devuelve el valor de contarDatod después de haber contado todas las propiedades.
};

// Implementar el método changeNotNumbers dentro del prototype de LinkedList que deberá cambiar
// aquellos valores que no puedan castearse a numeros por 'Kiricocho' y devolver la cantidad de cambios que hizo
// Aclaracion: si el valor del nodo puede castearse a número NO hay que reemplazarlo
// Ejemplo 1:
//    Suponiendo que la lista actual es: Head --> [1] --> ['2'] --> [false] --> ['Franco']
//    lista.changeNotNumbers();
//    Ahora la lista quedaría: Head --> [1] --> ['2'] --> [false] --> ['Kirikocho] y la función debería haber devuelto el valor 1

LinkedList.prototype.changeNotNumbers = function () {
  // Tu código aca:
  let current = this.head;
  let contador = 0;

  while (current) {
    if (isNaN(Number(current.value))) {
      contador++;
      current.value = "Kiricocho";
    }
    current = current.next;
  }
  return contador;
};

// Implementar la función mergeQueues que a partir de dos queues recibidas por parametro
// debe devolver una nueva Queue que vaya mergeando los nodos de las anteriores.
// Ejemplo:
// - queueOne: [7,3,5]
// - queueTwo: [2,4,6]
// mergeQueues(queueOne, queueTwo) --> [7,2,3,4,5,6]
// IMPORTANTE: NO son arreglos sino que son Queues.

var mergeQueues = function (queueOne, queueTwo) {
  // Tu código aca:
  let new_queue = new Queue();

  while (queueOne.size() || queueTwo.size()) {
    let firstElement = queueOne.dequeue();
    let secondElement = queueTwo.dequeue();

    if (firstElement) new_queue.enqueue(firstElement);

    if (secondElement) new_queue.enqueue(secondElement);
  }
  return new_queue;
};

// Implementar la funcion closureMult que permita generar nuevas funciones que representen
// las tablas de multiplicación de distintos numeros
// Ejemplo:
// - var multByFour = closureMult(4);
// - multByFour(2) --> 8 (2 * 4)
// - multByFour(5) --> 20
// - var multBySix = closureMult(6);
// - multBySix(4) --> 24

var closureMult = function (multiplier) {
  // Tu código aca:
  return function (num) {
    return num * multiplier;
  };
};

// Implementar el método sum dentro del prototype de BinarySearchTree
// que debe retornar la suma total de los valores dentro de cada nodo del arbol
BinarySearchTree.prototype.sum = function () {
  // Tu código aca:
  let suma = this.value;

  if (!this.value) return 0;

  if (this.left) suma += this.left.sum();

  if (this.right) suma += this.right.sum();

  return suma;
};

module.exports = {
  countArray,
  countProps,
  mergeQueues,
  closureMult,
};
