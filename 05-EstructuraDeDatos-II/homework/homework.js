"use strict";

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un
    solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor
  o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo,
  buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par,
  busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null; //Seria nuestra locomotora.
}

function Node(value) {
  //Seria el vagon de la locomotora.
  this.value = value; //Valor del vagon.
  this.next = null; //Enganche del vagon.
}

LinkedList.prototype.add = function (value) {
  let node = new Node(value); //Se crea un nuevo nodo.
  let current = this.head; //Se crea un variable con el valor de this.head == null.

  if (!current) this.head = node; //Si current es null --> this.head empieza a mirar al nodo.

  else {
    while (current.next) { //Bucle que se rrecorre siempre y cuando tengamos un current.next.
      current = current.next;  //Hacemos que current se mueva un vagon mas adelante.
    }

    return (current.next = node); //Asignamos el nodo nuevo al final de la lista.
  }
};

LinkedList.prototype.remove = function () {
  let current = this.head; //Se crea un variable con el valor de this.head

  if (!current) return null; //Si current es null devolvemos null(Eso es en el caso de que no haya ningun nodo)
  else if (!current.next) {  //Si current.next es null --> eliminamos el unico nodo que existe :)
    let memoria = this.head.value;
    this.head = null;
    return memoria;
  }

  while (current.next.next) { //Voy recorriendo el tren siempre parado en el peunltimo nodo hasta que sea null.
    current = current.next; //Avanzo un nodo si tenemos un valor
  }

  let memoria = current.next.value; //Variable para acceder al valor del ultimo nodo.
  current.next = null; //Borro el ultimo nodo igualandolo a null
  return memoria; // retornamos el valor del nodo
};

LinkedList.prototype.search = function (arg) {
  if (!this.head) return null;
  let current = this.head; //Se crea un variable con el valor de this.head

  if (typeof arg === "function") {
    while (current) { //Se entra en el bucle si hay un nodo.
      if (arg(current.value) === true) { //Esto es en caso de que se envie un valor -->
        return current.value;            //(Sirve para rrecorerlo y encontrar ese valor)
      }
      current = current.next;  //Avanzo un nodo para volver a buscar el valor en esa pocision nueva.
    }
  } else {
    while (current) { //Se entra en el bucle si hay un nodo.
      if (current.value === arg) { //aca buscamos cuyo valor que se pasado por el parametro del Callback
        return arg;
      }
      current = current.next;  //Avanzo un nodo para volver a buscar el valor(pasado por el parametro del Callback) -->
    }                          //en esa pocision nueva.
  }
  return null; //Si no se encuentra se devuelve null :(
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave 
  (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() { 
  this.table = [];             
  this.numBuckets = 35;      //Limite de cuadritos de nuestra tabla.
}

HashTable.prototype.hash = function (key) {
  let hash = 0; //inicializamos una variable que mepieza en 0.

  for (let i = 0; i < key.length; i++) { //Recorremos letra por letra a key
    hash += key.charCodeAt(i); //pasamos los valores a hasky.
  }
  return hash % this.numBuckets; //dividimos para que el valor de hash entre en el limite de bukets(35).
};

HashTable.prototype.set = function (key, value) {
  if (typeof key !== "string") throw TypeError("Keys must be strings"); // Si no es un string tira error :(
  let index = this.hash(key); //inicilailizamos una varible con el casillero(key).
  if (!this.table[index]) { //Si en mi tabla no tenemos nada en el index -->
    this.table[index] = {}; //Creamos un objeto.
  }
  this.table[index][key] = value; //Creamos en el objeto una key con un value.
};

HashTable.prototype.get = function (key) {
  let index = this.hash(key);//inicilizamos un variable que nos dice donde va a estar hash.

  return this.table[index][key]; //Y nos da el valor dentro de esa posicion(bucket).
};

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key); //inicilizamos un variable que nos dice donde va a estar hash.

  return this.table[index].hasOwnProperty(key); //Buscamos si hay algun valor almacenado en la tabla.
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
