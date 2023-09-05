"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro,
    hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) {
    //Es menor
    if (this.left) {
      //Si ya existe un nodo en la izquierda --> Aplicamos recursion.
      this.left.insert(value);
    } else {
      //Si no existe un nodo en la izquierda --> Creamos un nuevo arbol.
      this.left = new BinarySearchTree(value);
      return value;
    }
  } else {
    //Es mayor o igual
    if (this.right) {
      //Si ya existe un nodo en la derecha --> Aplicamos recursion.
      this.right.insert(value);
    } else {
      //Si no existe un nodo en la derecha --> Creamos un nuevo arbol.
      this.right = new BinarySearchTree(value);
      return value;
    }
  }
};

BinarySearchTree.prototype.size = function () {
   if (!this.left && !this.right) return 1;
 
   if (this.left && !this.right) return 1 + this.left.size();
 
   if (!this.left && this.right) return 1 + this.right.size();
 
   if (this.left && this.right) return 1 + (this.left.size() + this.right.size());
 };

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) return true;

  if (value < this.value) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if (!this.right) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, parametro) {
  //"post-order"=IZQ-DER-NODO || "pre-order" = NODO-IZQ-DER || "in-order"= IZQ-NODO-DER
  switch (parametro) {
    case "post-order":
      if (this.left && this.left.depthFirstForEach(cb, parametro));
      if (this.right && this.right.depthFirstForEach(cb, parametro));
      cb(this.value);
      break;
    case "pre-order":
      cb(this.value);
      if (this.left && this.left.depthFirstForEach(cb, parametro));
      if (this.right && this.right.depthFirstForEach(cb, parametro));
      break;
    default:
      if (this.left && this.left.depthFirstForEach(cb, parametro));
      cb(this.value);
      if (this.right && this.right.depthFirstForEach(cb, parametro));
      break;
  }
};
//- breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
BinarySearchTree.prototype.breadthFirstForEach = function (cb, value = []) {
  if (this.left) value.push(this.left); //Comprobamos si hay un nodo hijo izquierdo y lo agegamos a la cola.

  if (this.right) value.push(this.right); //Comprobamos si hay un nodo hijo derecho y lo agregamos a la cola

  cb(this.value); //aplicamos la devolucion al valor del nodo actual

  if (value.length > 0) {
    //Verificamos si todavia hay nodos en la cola
    value.shift().breadthFirstForEach(cb, value); //Extra el primer elemento de la cola y aplicamos la recursion.
  }
};


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
