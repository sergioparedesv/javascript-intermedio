//Paso 1, crearemos nuestro vector

const lista1 = [
    11000,
    31000,
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];

//Paso 2 Crearemos un objeto que cuente el array, acá guardaremos el item y cuantas veces aparece.
  
const lista1Count = {
/* 
  1:3,
  2:5,
  3:2,
  4:1,
   */
};


//Paso 3 crearemos un consolelog para ir llevando seguimiento.
console.log(lista1);
//Paso 4. Utilizaremos el método map.



//Paso 5 creamos una función map para resumir lo que contiene lista1
/* 
lista1.map( //Map nos permite recorrer un vector.
  function (elemento){ //Creamos una posición anonima y le pasaremos un argumento.
    lista1Count[elemento] = "vaca";
  }

);

 */
//Paso 6: Una vez explicado vamos a crear un condicional.


lista1.map( //Map nos permite recorrer un vector.
  function (elemento){ //Creamos una posición anonima y le pasaremos un argumento.
    if(lista1Count[elemento]){ //Comprueba que el elemento exista //Esto se ejecuta cuando ya existe el elemento, entonces no tendremos cambios aun.
      lista1Count[elemento] += 1;
    }else{ //Si el elemento no existe, lo creamos y le decimos que solo ha aparecido una vez.
      lista1Count[elemento] = 1;
    }

  }

);

//Paso 6.1: explicar el IF donde uno puede 

//Paso 6.2: Ir a la consola y mostrarles lo que pasa.

//Paso 9: Una vez creamos el objeto que nos cuenta la cantidad que se repite, necesitamos extraer la moda.

//Paso 10: Voy a convertir este objeto en un array.
//10.1 Utilizaremos una propiedad de javascrip Object.entries() nos permite crear un array, con arrays por dentro
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

/* const lista1Array = Object.entries(lista1Count); */

//Paso 11: Utilizaremos el método sort

/* const lista1Array = Object.entries(lista1Count).sort(
  function(valorAcumulado, nuevoValor){ //esto compara los valores acumulados y cambia las posiciones.
    valorAcumulado - nuevoValor
  }
);
 */



//Paso 12: vamos a la CONSOLA y aplicamos el método sort, explicando que lo ordenaremos por la cantidad

/* Object.entries(lista1Count);

Object.entries(lista1Count).sort()

Object.entries(lista1Count).sort(
  function (elementA, elementoB){
    if (elementA > elementB) return 1;
    if (elementA == elementB) return 0;
    if (elementA < elementB) return -1;
  }
) */

/* Object.entries(lista1Count).sort(
  function (elementA, elementB){
    return elementA[1] - elementB[1];
  }
)
 */

//Paso 13


const lista1Array =  Object.entries(lista1Count).sort(
  function (elementA, elementB){ //esto compara los valores acumulados y cambia las posiciones.
    return elementA[1] - elementB[1];
  }
)


const moda = lista1Array[lista1Array.length - 1];

console.log(moda);


//Retor, crear una función que nos calcule la moda.
